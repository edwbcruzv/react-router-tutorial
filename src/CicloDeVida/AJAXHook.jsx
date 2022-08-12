import React, { useEffect, useState } from 'react'


function Pokemon({avatar,name}) {
  return(
      <figure>
          <img src={avatar} alt={name} />
          <figcaption>{name}</figcaption>
      </figure>
  )
}

function AJAXHook() {
  const [Pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    let url=" https://pokeapi.co/api/v2/pokemon"
        fetch(url)
        .then(res=>res.json())
        .then((json)=>{
            console.log(json)

            json.results.forEach((elem)=>{
                fetch(elem.url).then(res2=>res2.json()).then((json)=>{
                    console.log(json)
                    let pokemon={
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    }

                    setPokemons((Pokemons) => { return [...Pokemons,pokemon] })
                })
            })
        })
  }, [])
  




    return (
        <div>
        {(Pokemons.length===0)?(
            <h4>Cargando...</h4>
        )
        :(Pokemons.map((elem) => {
            return <Pokemon key={elem.id} name={elem.name} avatar={elem.avatar} />
        }))}
      </div>
    )
}

export default AJAXHook