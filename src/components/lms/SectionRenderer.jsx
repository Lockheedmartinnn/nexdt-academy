import React from 'react';
import InfographicCard from './InfographicCard';
import ReadCard from './ReadCard';
import WatchCard from './WatchCard';
import ThinkCard from './ThinkCard';
import CheckCard from './CheckCard';
import QuizUI from './QuizUI';
import CalloutBox from './CalloutBox';
import StepsCard from './StepsCard';
import ConceptsCard from './ConceptsCard';
import ScenariosCard from './ScenariosCard';
import MistakesCard from './MistakesCard';
import ChecklistCard from './ChecklistCard';
import WorkflowCard from './WorkflowCard';
import RolesCard from './RolesCard';
import DoNotDoCard from './DoNotDoCard';
import ObjectiveCard from './ObjectiveCard';

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
    case 'steps':
      return <StepsCard section={section} />;
    case 'concepts':
      return <ConceptsCard section={section} />;
    case 'scenarios':
      return <ScenariosCard section={section} />;
    case 'mistakes':
      return <MistakesCard section={section} />;
    case 'checklist':
      return <ChecklistCard section={section} />;
    case 'workflow':
      return <WorkflowCard section={section} />;
    case 'roles':
      return <RolesCard section={section} />;
    case 'donotdo':
      return <DoNotDoCard section={section} />;
    case 'objective':
      return <ObjectiveCard section={section} />;
    case 'infographic':
      return <InfographicCard section={section} />;
    default:
      return null;
  }
}