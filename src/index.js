import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { FeedbackProvider } from './Context/FeedbackContext';

reactDom.render(
  <FeedbackProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FeedbackProvider>,
  document.getElementById('root')
);
