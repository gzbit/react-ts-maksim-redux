import React, { ChangeEvent, FC, useState, } from 'react'


type NewNoteInputProps = {
    onAddNote(note: string): void,
}

const NewNoteInput: FC<NewNoteInputProps> = ({ onAddNote }) => {

    const [note, setNote] = useState("")  //"" ist default value, required for its type

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNodeClick = () => {
        onAddNote(note)
        setNote("")
    }

    return(
        <div>
            <input onChange={updateNote} type="text" name="note" placeholder="Note" value={note}/>
            <button onClick={onAddNodeClick}>Add note</button>
        </div>
    )
}
export default NewNoteInput