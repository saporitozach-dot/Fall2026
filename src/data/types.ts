export type Flashcard = {
  id: string
  front: string
  back: string
  topic?: string
}

export type QuizQuestion = {
  id: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export type Quiz = {
  id: string
  title: string
  description: string
  questions: QuizQuestion[]
}

export type NoteSection = {
  id: string
  title: string
  bullets: string[]
  keyTerms?: { term: string; definition: string }[]
}
