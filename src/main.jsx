import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import "./global.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    <Cadastro/>
  </StrictMode>,
)
