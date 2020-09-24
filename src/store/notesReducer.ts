export type notesState = {
    notes: string[]
}

const initialState = {
    notes: []
}

type notesAction = {
    type: 'ADD',
    payload: string
}

const notesReducer = (state: notesState = initialState, action: notesAction) => {
    switch(action.type) {
        case 'ADD': {
            return { ...state, notes: [...state.notes, action.payload] }
        }
        default: {
            return state
        }
    }
}

export default notesReducer