import React from 'react'
import ReactDOM from 'react-dom/client'
import { Homepage } from './pages/homepage'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
