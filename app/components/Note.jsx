import React, { Component } from 'react'

// export default (props) => <div>{props.task}</div>;
// *REMEMBER the above is equivalent to the one we use\

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
)
