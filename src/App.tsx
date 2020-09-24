import React from 'react';
import './App.css'
import NewNoteInput from './components/NewNoteInput'
import { useDispatch, useSelector } from 'react-redux'
import { notesState } from './store/notesReducer';
import { addNoteAction } from './store/notesActions'

function App() {

  const notes = useSelector<notesState, notesState['notes']>((state) => state.notes) 

  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNoteAction(note))
  }

  return (
    <>
      <NewNoteInput onAddNote={onAddNote} />
      <hr />
          <ul>
              {notes.map((note) => {
                return <li key={note}>{note}</li>
              })}     
          </ul>
    </>
  )
}

export default App
