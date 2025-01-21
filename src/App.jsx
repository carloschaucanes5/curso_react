import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Estilos from './components/Estilos'
import ComponentesEstilizados from './components/ComponentesEstilizados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <br/>
      <ContadorHooks titulo="contador de seguidores"></ContadorHooks>
      <hr/>
      <RelojHooks></RelojHooks>
      <hr/>
      <AjaxHooks></AjaxHooks>
      <hr/>
      <HooksPersonalizados></HooksPersonalizados>
      <hr/>
      <Estilos></Estilos>
      <hr />
      <ComponentesEstilizados/>
    </>
  )
}

export default App
