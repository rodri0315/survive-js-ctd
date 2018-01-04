import React from 'react'
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default connect(() => ({}), {
  NoteActions,
  LaneActions
})(({lane, LaneActions, NoteActions, ...props}) => {
  const addNote = e => {
    e.stopPropagation();
    const noteId = uuid.v4();
    NoteActions.create({
      id: noteId,
      task: 'New task'
    });
    LaneActions.attachToLane({
      laneId: lane.id,
      noteId
    })
  } // End addNote
  //FIXME: It is weird in the tutorial he shows the update
  // method before adding it to the actions
  const activateLaneEdit = () => {
    LaneActions.update({
      id: lane.id,
      editing: true
    })
  } // activateLaneEdit

  const editName = name => {
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    })
  } // editName

  const deleteLane = e => {
    // Avoid bubbling to edit
    e.stopPropagation();

    LaneActions.delete(lane.id);
  } // deleteLane

  return (
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <div className="lane-add-note">
        <button onClick={addNote} >+</button>
      </div>

      <Editable className="lane-name" editing={lane.editing} value={lane.name} onEdit={editName} />

      <div className="lane-delete">
        <button onClick={deleteLane}>X</button>
      </div>
    </div>
  )
})