import React from 'react';
import ReadCard from './ReadCard';
import WatchCard from './WatchCard';
import ThinkCard from './ThinkCard';
import CheckCard from './CheckCard';
import QuizUI from './QuizUI';
import CalloutBox from './CalloutBox';

export default function SectionRenderer({ section, onCheckCorrect, onThinkContinue, onQuizPass, onQuizFail }) {
  if (!section) return null;

  switch (section.type) {
    case 'read':
      return <ReadCard section={section} />;

    case 'watch':
      return <WatchCard section={section} />;

    case 'think':
      return <ThinkCard section={section} onContinue={onThinkContinue} />;

    case 'check':
      return <CheckCard section={section} onCorrect={onCheckCorrect} />;

    case 'quiz':
      return <QuizUI section={section} onPass={onQuizPass} onFail={onQuizFail} />;

    case 'callout':
      return <CalloutBox variant={section.variant} title={section.title} body={section.body} isRiskBanner={section.isRiskBanner} />;

    default:
      return null;
  }
}