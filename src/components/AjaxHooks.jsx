import React,{useState,useEffect} from "react";

function Poke({name,avatar}){
    return (
        <figure>
            <img src={avatar} alt={name}  />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);
    useEffect(()=>{
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res=>res.json())
        .then((json)=>{
            json.results.forEach((el)=>{
                fetch(el.url)
                .then(res=>res.json())
                .then((json)=>{
                    let pokemon = { 
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    };
                    setPokemons((pokemons)=>[...pokemons,pokemon]);
                })
                
            })
        })

        },[]);

    return (
        
        <>
        <h2>Peticiones Asyncronas con Hooks</h2>
        {
            pokemons.length == 0?
            (<h3>Cargando</h3>):
            (pokemons.map((el)=>{
               <Poke name={el.name} avatar={el.avatar}></Poke>
            }))
        }
        </>
    );
}