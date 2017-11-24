import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
// development setup will install the uuid dependency automatically.
let noteCount = 0;
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  } // end constructor
  

  render() {
    const {notes} = this.state;

    return(
      <div>
        <button onClick={this.addNote}> + </button>
        <Notes 
          notes=      {notes} 
          onNoteClick={this.activateNoteEdit}
          onEdit=     {this.editNote}
          onDelete=   {this.deleteNote} />
      </div>
    );
  } // End render()

  
  addNote = () => {
    this.setState({
      notes: [...this.state.notes, {
        id: uuid.v4(),
        task: `New Task #${noteCount}`
      }]
    });
    noteCount++;
  } // End addNote 

  deleteNote = (id, evt) => {
    // Avoid bubbling to edit
    evt.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = true;
        }
        return note;
      })
    }) // end setState
  } //End activateNoteEdit

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if(note.id === id) {
          note.editing = false;
          note.task = task
        }
        return note;
      })
    }) //end setState
  } //End edit Note

} // End class App

export default App;