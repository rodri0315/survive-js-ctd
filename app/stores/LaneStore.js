import LaneActions from '../actions/LaneActions';

export default class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {
    // If `notes` are not provided by some reason, 
    // default to an empty array.
    lane.notes = lane.notes || [];

    this.setState({
      lanes: this.lanes.concat(lane)
    })

  } // End create lane

  attachToLane({laneId, noteId}) {
    this.setState({
      lanes: this.lanes.map(lane =>{
        if (lane.notes.includes(noteId)) {
          lane.notes = lane.notes.filter(note => note !== noteId)
        }
        if (lane.id === laneId) {
          lane.notes = lane.notes.concat([noteId]);
        }
        return lane;
      })
    })
  } // End attachToLane

  detachFromLane({laneId, noteId}) {
    this.setState({
      lanes: this.lanes.map(lane =>{
        if (lane.id === laneId) {
          lane.notes = lane.notes.filter(note => note !== noteId);
        }
        return lane;
      })
    })
  } // End detachFromLane
  update(updatedLane) {
    console.log('update lane', updatedLane);
    this.setState({
      lanes: this.lanes.map((lane) => {
        if(lane.id === updatedLane.id) {
          return Object.assign({}, lane, updatedLane)
        }
        return lane;
      })
    }) // end setState
  } // end update
  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    })
  } // delete

}