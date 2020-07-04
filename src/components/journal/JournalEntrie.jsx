import React from 'react'

export default function JournalEntries() {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://www.w3schools.com/w3css/img_lights.jpg)',
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal_entry-title">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="journal_entry-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
