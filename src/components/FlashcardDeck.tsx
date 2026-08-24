import { useMemo, useState } from 'react'
import type { Flashcard } from '../data/courses'
import './FlashcardDeck.css'

type FlashcardDeckProps = {
  cards: Flashcard[]
  accent: string
}

export function FlashcardDeck({ cards, accent }: FlashcardDeckProps) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [known, setKnown] = useState<Set<string>>(() => new Set())

  const card = cards[index]
  const progress = cards.length ? ((index + 1) / cards.length) * 100 : 0

  const status = useMemo(() => {
    if (!cards.length) return null
    return `${known.size} marked known · ${cards.length} total`
  }, [cards.length, known.size])

  if (!cards.length) {
    return (
      <div className="empty-panel">
        <h3>Flashcards coming soon</h3>
        <p>
          Send lecture notes or slides for this course and I&apos;ll generate AI
          flashcards focused on exam-ready concepts.
        </p>
      </div>
    )
  }

  function go(next: number) {
    setFlipped(false)
    setIndex((next + cards.length) % cards.length)
  }

  function markKnown() {
    if (!card) return
    setKnown((prev) => new Set(prev).add(card.id))
    go(index + 1)
  }

  return (
    <div className="deck">
      <div className="deck-meta">
        <div className="deck-progress" aria-hidden>
          <span style={{ width: `${progress}%`, background: accent }} />
        </div>
        <p>
          Card {index + 1} of {cards.length}
          {card.topic ? ` · ${card.topic}` : ''}
        </p>
        {status && <p className="deck-status">{status}</p>}
      </div>

      <button
        type="button"
        className={`flashcard ${flipped ? 'is-flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? 'Show prompt' : 'Show answer'}
      >
        <div className="flashcard-inner">
          <div className="flashcard-face flashcard-front">
            <span className="face-label">Prompt</span>
            <p>{card.front}</p>
            <span className="flip-hint">Tap to flip</span>
          </div>
          <div
            className="flashcard-face flashcard-back"
            style={{ borderColor: accent }}
          >
            <span className="face-label">Answer</span>
            <p>{card.back}</p>
            <span className="flip-hint">Tap to flip back</span>
          </div>
        </div>
      </button>

      <div className="deck-actions">
        <button type="button" className="btn ghost" onClick={() => go(index - 1)}>
          Previous
        </button>
        <button type="button" className="btn ghost" onClick={() => go(index + 1)}>
          Next
        </button>
        <button
          type="button"
          className="btn solid"
          style={{ background: accent }}
          onClick={markKnown}
        >
          Got it
        </button>
      </div>
    </div>
  )
}
