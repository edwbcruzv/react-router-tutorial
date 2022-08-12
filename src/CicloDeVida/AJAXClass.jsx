import React, { Component } from 'react'

function Pokemon({avatar,name}) {
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export class AJAXClass extends Component {

    state={
        pokemons:[]
    }

    componentDidMount(){
        // se hace la peticion durante el montaje del componente para que cuando se inserte
        // en el dom ya esten los datos
        let url=" https://pokeapi.co/api/v2/pokemon"
        fetch(url)
        .then(res=>res.json())
        .then((json)=>{
            console.log(json)

            json.results.forEach((elem)=>{
                // console.log(elem.url)
                fetch(elem.url)
                .then(res2=>res2.json())
                .then(async (json)=>{
                    // console.log(json.id)
                    let pokemon={
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    }

                    let pokemons = [...this.state.pokemons,pokemon]

                    this.setState({pokemons})
                    // console.log(this.state.pokemons) 
                })
                
            })
            
        })
        
    }


  render() {
    return (
        // <React.StrictMode>
      <div>
        {(this.state.pokemons.length===0)?(
            <h3>Cargando...</h3>
        )
        :(this.state.pokemons.map((elem) => {
            // console.log(elem)
            return <Pokemon key={elem.id} name={elem.name} avatar={elem.avatar} />
        }))}
      </div>
    //   </React.StrictMode>
    )
  }
}

export default AJAXClass