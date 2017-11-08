import React from 'react';


export default ({notes}) => (
  // Using JSX, .map return a list of li elements for react to render
  <ul>{notes.map(note =>
    // using a key property, in order to tell react the state of items 
    <li key={note.id}>{note.task}</li>)
  }</ul>
)