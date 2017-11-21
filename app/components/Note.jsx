import React, { Component } from 'react'

// export default (props) => <div>{props.task}</div>;
// *REMEMBER the above is equivalent to the one we use\

export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}>x</button>
  </div>
)
