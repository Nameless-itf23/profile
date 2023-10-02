import React from 'react'
import ReactDOM from 'react-dom/client'
import 'ress'
import App from './App.tsx'
import './index.css'
import "./language/configs";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
