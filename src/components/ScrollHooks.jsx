import React,{useState,useEffect} from "react";
export default function ScrollHooks(){
    const [scrollY,setScrollY] = useState(0);
    useEffect(()=>{
        console.log("moviendo el scroll");
        const detectarScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll",detectarScroll);
        return ()=>{
            window.removeEventListener("scroll",detectarScroll);
        }

    },[scrollY])

    useEffect(()=>{
        console.log("fase de montaje");
    },[])

    useEffect(()=>{
        console.log("fase de actualizacion");
    })

    useEffect(()=>{
        console.log("Fase de desmontaje");
        return ()=>{
            window.removeEventListener("scroll",)
        }
    })

    return(
    <>
        <h4>Kook useEffect - ciclo de vida de componentes</h4>
        <p>ScrollY del Navegador {scrollY} px</p>
    </>)
}