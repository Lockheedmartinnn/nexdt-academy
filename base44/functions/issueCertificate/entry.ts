import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json().catch(() => ({}));
    const trackId = body.track_id;

    // Load the user's progress record
    const records = await base44.entities.CourseProgress.filter({ created_by: user.email });
    const progress = records?.[0];
    if (!progress) return Response.json({ error: 'No progress record found' }, { status: 404 });

    // Idempotent: if already issued, don't re-send
    if (progress.certificate_issued) {
      return Response.json({ ok: true, alreadyIssued: true, certificate_id: progress.certificate_id });
    }

    // Only issue for the selected track the student completed
    if (trackId && progress.track_id && trackId !== progress.track_id) {
      return Response.json({ error: 'Track not selected by this user' }, { status: 400 });
    }

    const certId = 'NEXDT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();

    // Compute final score from quiz_scores if present, else completion = 100
    let score = 100;
    const qs = progress.quiz_scores || {};
    const vals = Object.values(qs).filter((v) => typeof v === 'number');
    if (vals.length > 0) score = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);

    // Mark certificate issued
    await base44.entities.CourseProgress.update(progress.id, {
      certificate_issued: true,
      certificate_id: certId,
      certificate_date: new Date().toISOString(),
      final_assessment_score: score,
    });

    // Send congratulatory email (registered app users only)
    const firstName = (user.full_name || 'there').split(' ')[0];
    const trackTitle = body.track_title || 'your NexDT Academy track';
    const subject = 'Congratulations — you are NexDT certified!';
    const emailBody = [
      `Hi ${firstName},`,
      '',
      `Congratulations! You have successfully completed the ${trackTitle} and earned your NexDT Academy certification.`,
      '',
      `Your certificate ID is ${certId}, with a final score of ${score}%.`,
      'You can view and download your certificate anytime from the Academy dashboard.',
      '',
      'Well done on the achievement — welcome to the NexDT certified community.',
      '',
      '— The NexDT Academy team',
    ].join('\n');

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: user.email,
      subject,
      body: emailBody,
      from_name: 'NexDT Academy',
    });

    return Response.json({ ok: true, certificate_id: certId, score, emailed: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});