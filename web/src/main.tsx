import React from 'react'
import ReactDOM from 'react-dom/client'
import './lib/dayjs'
import { Homepage } from './pages/Homepage'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)
