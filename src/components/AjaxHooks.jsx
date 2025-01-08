import React,{useState,useEffect} from "react";

const Poke=({name,avatar})=>{
    return (
        <figure>
            <img  src={avatar} alt={name}  />
            <figcaption>{name}</figcaption>
        </figure>
    );
}

const  AjaxHooks=()=>{
    const [pokemons, setPokemons] = useState([]);
    /*useEffect(()=>{
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
                    setPokemons(()=>[...pokemons,pokemon]);
                })
                
            })
        })

        },[]);*/


        useEffect(()=>{
            let url = "https://pokeapi.co/api/v2/pokemon/";
            const getPokemons = async(url)=>{
                let res = await fetch(url);
                let json = await res.json();
                
                json.results.forEach(async (el)=>{
                    let res =  await fetch(el.url);
                    let json = await res.json();
                    
                    let pokemon = { 
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    };
                    setPokemons(()=>[...pokemons,pokemon]);
                    
                })
            }




         
    
            },[]);
    return (
        
        <>
        <h2>Peticiones Asyncronas con Hooks</h2>
        {
            pokemons.length == 0?
            (<h3>Cargando</h3>):
            (pokemons.map((el)=>{
               <Poke key={el.id} name={el.name} avatar={el.avatar}></Poke>
            }))
        }
        </>
    );
}

export default AjaxHooks;