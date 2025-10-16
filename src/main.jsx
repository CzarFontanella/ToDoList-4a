import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login/Login.jsx'
import Cadastro from './pages/Cadastro/Cadastro.jsx'
import "./global.css"
import NavBar from './components/NavBar/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <NavBar/>
    </header>
    <main></main>
    <footer></footer>
    
    {/* <Login /> */}
    {/* <Cadastro/> */}
  </StrictMode>,
)
