import type { Flashcard, NoteSection, Quiz } from './types'
import {
  financeFlashcards,
  financeNotes,
  financeQuizzes,
} from './finance'
import {
  leadershipFlashcards,
  leadershipNotes,
  leadershipQuizzes,
} from './leadership'
import {
  marketingFlashcards,
  marketingNotes,
  marketingQuizzes,
} from './marketing'
import {
  operationsFlashcards,
  operationsNotes,
  operationsQuizzes,
} from './operations'

export type { Flashcard, NoteSection, Quiz, QuizQuestion } from './types'

export type Course = {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  accent: string
  status: 'ready' | 'awaiting'
  notes: NoteSection[]
  flashcards: Flashcard[]
  quizzes: Quiz[]
}

export const courses: Course[] = [
  {
    id: 'finance',
    name: 'I-Core Finance',
    shortName: 'Finance',
    tagline: 'Value, risk, and capital decisions',
    description:
      'Time value of money, valuation, capital budgeting, risk & return, and how firms fund growth.',
    accent: '#1DB8A0',
    status: 'ready',
    notes: financeNotes,
    flashcards: financeFlashcards,
    quizzes: financeQuizzes,
  },
  {
    id: 'marketing',
    name: 'I-Core Marketing',
    shortName: 'Marketing',
    tagline: 'Customers, brands, and growth',
    description:
      'Segmentation, positioning, the marketing mix, research, and go-to-market strategy.',
    accent: '#3B82F6',
    status: 'ready',
    notes: marketingNotes,
    flashcards: marketingFlashcards,
    quizzes: marketingQuizzes,
  },
  {
    id: 'leadership',
    name: 'I-Core Leadership',
    shortName: 'Leadership',
    tagline: 'People, influence, and teams',
    description:
      'Motivation, organizational behavior, decision-making, and leading through change.',
    accent: '#F59E0B',
    status: 'ready',
    notes: leadershipNotes,
    flashcards: leadershipFlashcards,
    quizzes: leadershipQuizzes,
  },
  {
    id: 'operations',
    name: 'I-Core Operations',
    shortName: 'Operations',
    tagline: 'Process, capacity, and flow',
    description:
      'Process analysis, inventory, quality, supply chains, and making operations efficient.',
    accent: '#0F766E',
    status: 'ready',
    notes: operationsNotes,
    flashcards: operationsFlashcards,
    quizzes: operationsQuizzes,
  },
  {
    id: 'ethics',
    name: 'Business Ethics',
    shortName: 'Ethics',
    tagline: 'Judgment under pressure',
    description:
      'Ethical frameworks, stakeholder analysis, corporate responsibility, and hard tradeoffs.',
    accent: '#C2410C',
    status: 'awaiting',
    notes: [],
    flashcards: [],
    quizzes: [],
  },
]

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id)
}
