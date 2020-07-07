import { firestore } from '../firebase/fireConfig'

export const loadNotes = async uid => {
  const notesList = await firestore.collection(`${uid}/journal/notes`).get()
  const notes = []

  notesList.forEach(note => {
    notes.push({ id: note.id, ...note.data() })
  })

  return notes
}
