import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startSaveNote, startUploading } from '../../actions/notes'

export default function NotesAppBar() {
  const { active } = useSelector(state => state.notes)
  const dispatch = useDispatch()
  const fileSelector = useRef()

  const handleSave = () => {
    dispatch(startSaveNote(active))
  }
  const handlePictureClick = () => {
    fileSelector.current.click()
  }
  const handleFileChange = ({ target }) => {
    const file = target.files[0]

    if (file) dispatch(startUploading(file))
  }

  return (
    <div className="notes_appbar">
      <span>07/17/2020</span>
      <input
        ref={fileSelector}
        type="file"
        name="picture"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}
