import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



// Pure/Smart Component :-)
// 1. extends the PureComponent
// 2. If no Difference in Props/State, then no re-Render
// 3. Implemented shouldComponentUpdate lifecycle method BTS.


