import React from 'react';
import uuid from 'uuid';
import connect from '../libs/connect';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New Lane'
    });
  };

  return (
    <div>
      <button className="add-lane" onClick={addLane}> + </button>
      <Lanes lanes={lanes} />
    </div>
  );

} // End const App

export default connect(({lanes}) => ({
  lanes
}),
  {LaneActions}
)(App)