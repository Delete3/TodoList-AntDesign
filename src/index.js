import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'antd/dist/antd.min.css';
import './index.css';

const DATA = [
  { id: "task-0", name: "eat", completed: true },
  { id: "task-1", name: "sleep", completed: false },
  { id: "task-2", name: "repeat", completed: false },
]

ReactDOM.render(
  <App tasks={DATA} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
