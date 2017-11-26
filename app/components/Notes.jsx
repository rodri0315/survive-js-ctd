import React from 'react'
import Note from './Note'

import Editable from './Editable'

export default ({ 
  notes, 
  onNoteClick=() => {},
  onEdit=() => {},
  onDelete=() => {} 
  }) => (
  // Using JSX, .map return a list of li elements for react to render
  <ul className="notes" >
    {notes.map(({id, editing, task}) =>
      // using a key property, in order to tell react the state of items 
      // <li key={note.id}>{note.task}</li>)}
      
      // emmet shorcut hint li[key] = 
      <li key={id}>
        <Note className="note" 
              onClick={onNoteClick.bind(null,id)} >
          <Editable className="editable"
                    editing={editing}
                    value={task}
                    onEdit={onEdit.bind(null,id)} />
          <button className="delete"  onClick={onDelete.bind(null,id)}>
            x
          </button>
        </Note>
      </li>
    )}
  </ul>
)