import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageCircle, X, Send, Loader2, ThumbsUp, ThumbsDown, ExternalLink, Sparkles } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';

const STARTERS = [
  'How do I stabilise GPS altitude before a mission?',
  'What camera settings should I use for a tower capture?',
  'How do I do a rip and replace as a Colo User?',
  'Why did my job fail with a leaning model?',
];

const markdownComponents = {
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 space-y-1">{children}</ol>,
  ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-1">{children}</ul>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
  h1: ({ children }) => <p className="font-semibold text-white mb-1">{children}</p>,
  h2: ({ children }) => <p className="font-semibold text-white mb-1">{children}</p>,
  h3: ({ children }) => <p className="font-semibold text-white mb-1">{children}</p>,
  code: ({ children }) => (
    <code className="px-1 py-0.5 rounded text-xs" style={{ background: 'rgba(148,163,184,0.15)' }}>{children}</code>
  ),
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#93C5FD' }}>
      {children}
    </a>
  ),
};

export default function AcademyAssistant() {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  if (!isAuthenticated) return null;

  const send = async (text) => {
    const question = (text || '').trim();
    if (!question || loading) return;

    const history = messages.map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, { role: 'user', content: question }]);
    setInput('');
    setLoading(true);

    try {
      const res = await base44.functions.invoke('askAcademy', {
        question,
        history,
        page: window.location.pathname + window.location.search,
      });
      const data = res?.data ?? res;
      if (!data || data.error || !data.answer) throw new Error(data?.error || 'No answer returned');
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.answer,
          sources: data.sources || [],
          followUps: data.follow_ups || [],
          logId: data.log_id || null,
          answered: !!data.answered,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong while getting an answer. Please try again.', isError: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendFeedback = async (index, helpful) => {
    const message = messages[index];
    if (!message?.logId || message.helpful === helpful) return;
    setMessages((prev) => prev.map((m, i) => (i === index ? { ...m, helpful } : m)));
    try {
      await base44.entities.AssistantQuestion.update(message.logId, { helpful });
    } catch (err) {
      // Feedback is best-effort.
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="NexDT Assistant"
          className="fixed right-4 bottom-24 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            zIndex: 70,
            width: 'min(400px, calc(100vw - 2rem))',
            height: 'min(600px, calc(100vh - 8rem))',
            background: '#0F1524',
            border: '1px solid rgba(71,85,105,0.5)',
            color: '#CBD5E1',
          }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ background: '#0A0E1A', borderBottom: '1px solid rgba(55,65,81,0.5)' }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#3B82F6' }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white">NexDT Assistant</div>
              <div className="text-xs" style={{ color: '#64748B' }}>Answers from SiteSee guides and Academy lessons</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: '#94A3B8' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-sm">
            {messages.length === 0 && (
              <div>
                <p className="mb-3" style={{ color: '#94A3B8' }}>
                  Ask about NexDT workflows, capture procedures or troubleshooting. Every answer links to the guide it
                  came from.
                </p>
                <div className="space-y-2">
                  {STARTERS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="block w-full text-left px-3 py-2 rounded-lg text-xs transition-colors hover:bg-white/5"
                      style={{ border: '1px solid rgba(71,85,105,0.5)', color: '#CBD5E1' }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[85%] px-3 py-2 rounded-2xl rounded-br-md text-white" style={{ background: '#3B82F6' }}>
                    {m.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="max-w-[92%]">
                  <div
                    className="px-3 py-2.5 rounded-2xl rounded-bl-md break-words"
                    style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.35)' }}
                  >
                    <ReactMarkdown components={markdownComponents}>{m.content}</ReactMarkdown>
                  </div>

                  {m.sources?.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <div className="text-xs uppercase tracking-wide" style={{ color: '#64748B' }}>Sources</div>
                      {m.sources.map((s) =>
                        s.url ? (
                          <a
                            key={s.n}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-1.5 text-xs hover:underline"
                            style={{ color: '#93C5FD' }}
                          >
                            <span className="flex-shrink-0">[{s.n}]</span>
                            <span className="flex-1">{s.title}</span>
                            <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          </a>
                        ) : (
                          <div key={s.n} className="flex items-start gap-1.5 text-xs" style={{ color: '#94A3B8' }}>
                            <span className="flex-shrink-0">[{s.n}]</span>
                            <span className="flex-1">{s.title}</span>
                          </div>
                        ),
                      )}
                    </div>
                  )}

                  {m.followUps?.length > 0 && i === messages.length - 1 && !loading && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.followUps.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="px-2.5 py-1 rounded-full text-xs transition-colors hover:bg-white/5"
                          style={{ border: '1px solid rgba(71,85,105,0.5)', color: '#CBD5E1' }}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}

                  {m.logId && !m.isError && (
                    <div className="mt-2 flex items-center gap-1">
                      <button
                        onClick={() => sendFeedback(i, true)}
                        aria-label="Helpful"
                        className="p-1 rounded hover:bg-white/10"
                        style={{ color: m.helpful === true ? '#34D399' : '#64748B' }}
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => sendFeedback(i, false)}
                        aria-label="Not helpful"
                        className="p-1 rounded hover:bg-white/10"
                        style={{ color: m.helpful === false ? '#F87171' : '#64748B' }}
                      >
                        <ThumbsDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              ),
            )}

            {loading && (
              <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Checking the guides...
              </div>
            )}
          </div>

          <form
            onSubmit={onSubmit}
            className="px-3 py-3"
            style={{ background: '#0A0E1A', borderTop: '1px solid rgba(55,65,81,0.5)' }}
          >
            <div
              className="flex items-center gap-2 rounded-xl px-3"
              style={{ background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(71,85,105,0.5)' }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="Ask a question..."
                aria-label="Your question"
                className="flex-1 bg-transparent py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="p-1.5 rounded-lg transition-opacity disabled:opacity-40"
                style={{ background: '#3B82F6', color: '#fff' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-center" style={{ color: '#475569', fontSize: 11 }}>
              Answers come from SiteSee documentation. Open the linked source for critical steps.
            </p>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close assistant' : 'Open NexDT Assistant'}
        className="fixed right-4 bottom-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-105"
        style={{ zIndex: 70, background: '#3B82F6', color: '#fff' }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
