import React from "react";
import './Estilos.css'
import estyle  from './Estilos.module.css'
import './Estilos.scss'
export default function Estilos(){
    const objEstilo = {
        backgroundColor:'red',
        maxWidth:'50%',
        textAlign:'center'
    }

    return(
    <section className="estilo">
        <h2>Estilos en react</h2>
        <h3 className="bg-react">Estilos con archivo externo</h3>
        <h3 className="bg-react" style={{borderRadius:'1.5rem',margin:'1rem',textAlign:'end'}}>Estilos cen linea</h3>
        <h3 style={objEstilo}>Estilos con un objeto declarado</h3>
        <h3>Agregando Normalizar estilos <code>@import-normalize;</code></h3>
        <h3 className={estyle.bgmodule}>Estilos con archivos modulo</h3>
        <h3 className="bgscss">Estilos con archivo SCSS</h3>
    </section>
    )
}