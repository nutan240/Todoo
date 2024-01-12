import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoProvider } from './TodoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TodoProvider>
)
