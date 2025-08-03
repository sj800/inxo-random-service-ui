// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import ChessPage from './components/pages/ChessPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/inxo-random-service-ui">
    <Routes>
      <Route path="/chess-board" element={<ChessPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
