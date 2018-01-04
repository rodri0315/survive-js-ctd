import NoteActions from '../actions/NoteActions'

export default class NoteStores {
  constructor() {
    this.bindActions(NoteActions);
    // persistency works now, we might as well start from a blank slate. 
    this.notes = [];
  }

  create(note) {
    console.log('create note:', note);
    this.setState({
      notes: this.notes.concat(note)
    })
  }
  update(updatedNote) {
    console.log('update note', updatedNote);
    this.setState({
      notes: this.notes.map((note) => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote)
        }
        return note;
      })
    }) // end setState
  } // end update
  delete(id) {
    console.log('delete note', id);
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    })

  }

}