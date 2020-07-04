import React from 'react'
import NotesAppBar from './NotesAppBar'

export default function Notes() {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
        />

        <textarea
          name="description"
          className="notes__textarea"
          placeholder="Description..."
        ></textarea>

        <div className="notes__image">
          <img
            src="https://www.w3schools.com/w3css/img_lights.jpg"
            alt="aura"
          />
        </div>
      </div>
    </div>
  )
}
