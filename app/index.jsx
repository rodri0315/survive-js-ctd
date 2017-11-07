import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './components/Notes';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div>
    <div>Hello world</div>
  
    <Notes />
  </div>,
  
  document.getElementById('app')
);
