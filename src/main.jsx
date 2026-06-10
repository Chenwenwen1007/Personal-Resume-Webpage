import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import profileAvatar from '../img/profile-avatar-square.png'

const favicon = document.querySelector("link[rel='icon']")

if (favicon) {
  favicon.setAttribute('href', profileAvatar)
  favicon.setAttribute('type', 'image/png')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
