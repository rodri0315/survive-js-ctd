import React from 'react';
import uuid from 'uuid';
// development setup will install the uuid dependency automatically.

// debugger;

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default () => (
  // Using JSX, .map return a list of li elements for react to render
  <ul>{notes.map(note =>
    // using a key property, in order to tell react the state of items 
    <li key={note.id}>{note.task}</li>)
  }</ul>
)