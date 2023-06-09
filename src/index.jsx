import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './global.css';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App/App';
import tasksListReducer from './slice/tasksListSlice';

const store = configureStore({
  reducer: {
    tasksList: tasksListReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
