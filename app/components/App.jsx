import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
// development setup will install the uuid dependency automatically.

// debugger;

// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Learn React'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   }
// ];


// export default () => (
//   // React components have to return a single element, 
//   // we had to wrap our application within a div,
//   // I believe this changes in react 16.
//   <div>
//     <button onClick={() => console.log('add more')}> + </button>
//     <Notes notes={notes} />
//   </div>
// )

export default class App extends React.Component {
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
        <Notes notes={notes} />
      </div>
    );
  } // End render()

  addNote = () => {
    this.setState({
      notes: [...this.state.notes, {
        id: uuid.v4(),
        task: 'New task'
      }]
    });
  } // End addNote 

} // End class App