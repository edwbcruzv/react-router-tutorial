import React from 'react'
import AJAXClass from '../CicloDeVida/AJAXClass'
import AJAXHook from '../CicloDeVida/AJAXHook'
import HookPersonalizado from '../CicloDeVida/HookPersonalizado'
import MyStateClass from '../CicloDeVida/MyStateClass'
import MyUseEffect from '../CicloDeVida/MyUseEffect'
import MyUseState from '../CicloDeVida/MyUseState'
import Referencias from '../CicloDeVida/Referencias'
import RelojHooks from '../CicloDeVida/RelojHooks'

function HooksPage() {
  return (
    <div>
        
        <h3>Ciclo de vida de un Componente usando una Clase</h3>
        {/* <MyStateClass/> */}
        <h3>Peticiones a una API por medio del ciclo de vida</h3>
        {/* <AJAXClass/> */}
        <h3>Usando UseState</h3>
        {/* <MyUseState/> */}
        <h3>Usando UseEffect</h3>
        {/* <MyUseEffect/> */}
        <h3>Reloj con hooks</h3>
        {/* <RelojHooks/> */}
        <h3>Peticiones a una API por medio de un hook</h3>
        {/* <AJAXHook/> */}
        <h3>Hook PErsonalizado</h3>
        {/* <HookPersonalizado/> */}
        <h3>Referencias</h3>
        <Referencias/>
    </div>
  )
}

export default HooksPage