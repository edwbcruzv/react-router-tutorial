import React, { Component } from 'react'

export class MyStateClass extends Component {
/**
 * Montaje:
 *  - constructor
 *  - render
 *  - componentDidMount
 * 
 * Actualizacion:
 *  - render
 *  - componentDidUpdate
 * 
 * Desmontaje:
 *  - componentWillUnmount
 *  
 */

    constructor(props) {
      super(props)
      console.log(0,"El Componente se esta inicializando(Montando), aun NO esta en el DOM")
      this.state = {
         Count:0,
         Hora:new Date().toLocaleTimeString()
      }
    }


    componentDidMount(){
      // aqui es en donde adecueado donde se puede hacer una peticion a una API, ya que
      // fue inicializado el componente
      console.log(1,"El Componente se inicializo (Fin del montaje), ya esta en el DOM")
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      // permite pasar propiedades previas o estados previos que se van a trabajar antes
      // de actualizar el componente
      console.log(2,"Se Actualizo el componente (Update)","prevProps:",prevProps,"prevState:",prevState,"snapshot:",snapshot)
    }

    componentWillUnmount(){
      // cuando el componente ya no exista 
      console.log(3,"El Componente fue eliminado (Desmontaje)")
    }

    

  render() {
    // 
    console.log(4,"El componente se renderizo (o se Re-renderizo por algun cambio) en el DOM")
    return (
      <div>
        <p>Presionado {this.state.Count } veces</p>
        <button onClick={() => { this.setState({
            Count:this.state.Count+1,
            Hora:new Date().toLocaleTimeString()
          })}} >Click</button>
        <p>Hora que se presiono el boton {this.state.Hora}</p>
      </div>
    )
  }
}

export default MyStateClass