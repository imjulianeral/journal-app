import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import useForm from '../../hooks/useForm'
import { activeNote, startDeleting } from '../../actions/notes'

import NotesAppBar from './NotesAppBar'

export default function Notes() {
  const { active } = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const [note, handleChange, reset] = useForm(active)
  const activeID = useRef(active.id)

  useEffect(() => {
    if (active.id !== activeID.current) {
      reset(active)
      activeID.current = active.id
    }
  }, [active, reset])

  useEffect(() => {
    dispatch(activeNote(note.id, { ...note }))
  }, [note, dispatch])

  const handleDelete = () => {
    dispatch(startDeleting(active.id))
  }

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          value={note.title}
          onChange={handleChange}
        />

        <textarea
          name="body"
          className="notes__textarea"
          placeholder="Description..."
          value={note.body}
          onChange={handleChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="img" />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
