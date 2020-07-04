import React from 'react'
import JournalEntrie from './JournalEntrie'

export default function JournalEntries() {
  const entries = [1, 2, 3, 4, 5]

  return (
    <div className="journal__entries">
      {entries.map(entrie => (
        <JournalEntrie key={entrie} />
      ))}
    </div>
  )
}
