import ReactDOM from 'react-dom/client'

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import "./assets/styles/custom.css";
import "./assets/styles/animation.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
