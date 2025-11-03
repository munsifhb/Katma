import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralProvider } from './context/GeneralContext.jsx'

createRoot(document.getElementById('root')).render(
  <GeneralProvider>
    <App />
  </GeneralProvider>
)
