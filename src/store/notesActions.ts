export type notesAction = { type: 'ADD', payload: string}

export const addNoteAction = (note: string): notesAction => ({
    type: 'ADD',
    payload: note
})