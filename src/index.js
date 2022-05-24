import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

/* const p = React.createElement(
  'p',
  {},
  'Кажется, мы подключили React',
 );

const element = React.createElement(
  'h1',
  { className: "element" },
  p,
 ); */





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
