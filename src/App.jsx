import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'


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
    </>
  )
}

export default App
