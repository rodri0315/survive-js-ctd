import React from 'react';
import Note from './Note'


export default ({ notes, onDelete=() => {} }) => (
  // Using JSX, .map return a list of li elements for react to render
  <ul>
    {notes.map(({id, task}) =>
      // using a key property, in order to tell react the state of items 
      // <li key={note.id}>{note.task}</li>)}
      
      // emmet shorcut hint li[key]
      <li key={id}>
        <Note 
          onDelete={onDelete.bind(null, id)}
          task={task} />
      </li>
    )}
  </ul>
)