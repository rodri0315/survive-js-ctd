import React from 'react'
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
  lane, notes, LaneActions, NoteActions, ...props
}) => {
  
  const editNote = (id, task) => {
    NoteActions.update({id, task, editing: false})
  } //End edit Note

  // TODO:
  // Ask why does the delete method needs a noteId instead of id
  const deleteNote = (noteId, evt) => {
    // Avoid bubbling to edit
    evt.stopPropagation();

    LaneActions.detachFromLane({
      laneId: lane.id,
      noteId
    })
    NoteActions.delete(noteId);
  }

  const activateNoteEdit = (id) => {
    NoteActions.update({
      id,
      editing: true
    })
  } //End activateNoteEdit

  return (
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes  notes={selectNotesByIds(notes, lane.notes)}
              onNoteClick={activateNoteEdit}
              onEdit={editNote}
              onDelete={deleteNote} />
    </div>
  )

};

function selectNotesByIds(allNotes, noteIds = []) {
  // Here we are using the reduce method to concatenate
  // notes matching to the ids.
  return noteIds.reduce((notes, id) => 
    // Concatenate possible matching ids to the result
    notes.concat(
    allNotes.filter(note => note.id === id)
  ), []);
}

export default connect(
  ({notes}) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  }
)(Lane)