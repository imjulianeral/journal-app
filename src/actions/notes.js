import Swal from 'sweetalert2'

import { firestore } from '../firebase/fireConfig'
import { types } from '../types/types'
import { loadNotes } from '../helpers/loadNotes'
import { fileUpload } from '../helpers/fileUpload'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }
    const docRef = await firestore.collection(`${uid}/journal/notes`).add(newNote)

    dispatch(activeNote(docRef.id, newNote))
    dispatch(addNewNote(docRef.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.NOTES_ACTIVE,
  payload: {
    id,
    ...note,
  },
})

export const addNewNote = (id, note) => ({
  type: types.NOTES_ADD_NEW,
  payload: {
    id,
    ...note,
  },
})

export const startLoadingNotes = uid => {
  return async dispatch => {
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const setNotes = notes => ({
  type: types.NOTES_LOAD,
  payload: notes,
})

export const startSaveNote = note => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    if (!note.url) delete note.url

    const firestoreNote = { ...note }
    delete firestoreNote.id

    await firestore.doc(`${uid}/journal/notes/${note.id}`).update(firestoreNote)

    dispatch(refreshNote(note.id, firestoreNote))
    Swal.fire('Saved', note.title, 'success')
  }
}

export const refreshNote = (id, note) => ({
  type: types.NOTES_UPDATED,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
})

export const startUploading = file => {
  return async (dispatch, getState) => {
    const { active } = getState().notes

    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      onBeforeOpen() {
        Swal.showLoading()
      },
    })

    const fileURL = await fileUpload(file)

    active.url = fileURL

    dispatch(startSaveNote(active))

    Swal.close()
  }
}

export const startDeleting = id => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    await firestore.doc(`${uid}/journal/notes/${id}`).delete()

    dispatch(deleteNote(id))
  }
}

export const deleteNote = id => ({
  type: types.NOTES_DELETE,
  payload: id,
})

export const noteLogout = () => ({
  type: types.NOTES_LOGOUT_CLEANING,
})
