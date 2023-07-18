import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from './context/stateProvider';
import reducer, { initialState } from './context/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <StateProvider reducer={reducer} initialState={initialState}>
           <App />
          </StateProvider>
        </BrowserRouter>
  </React.StrictMode>
);

