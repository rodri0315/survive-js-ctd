import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

// development setup will install the uuid dependency automatically.
let noteCount = 0;
class App extends React.Component {

  render() {
    const {notes} = this.props;

    return(
      <div>

        <button className="add-note" onClick={this.addNote}> + </button>
        <Notes 
          notes=      {notes} 
          onNoteClick={this.activateNoteEdit}
          onEdit=     {this.editNote}
          onDelete=   {this.deleteNote} />
      </div>
    );
  } // End render()

  
  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  } // End addNote 

  deleteNote = (id, evt) => {
    // Avoid bubbling to edit
    evt.stopPropagation();

    this.props.NoteActions.delete(id);
  }

  activateNoteEdit = (id) => {
    this.props.NoteActions.update({
      id,
      editing: true
    })
  } //End activateNoteEdit

  editNote = (id, task) => {
    this.props.NoteActions.update({id, task, editing: false})
  } //End edit Note

} // End class App

export default connect(({notes}) => ({
  notes
}),
  {NoteActions}
)(App)