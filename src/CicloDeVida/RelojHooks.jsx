import React, {useState,useEffect} from 'react'


function Reloj({hora}) {
    return <h3>{hora}</h3>
}

function RelojHooks() {
    const [Hora, setHora] = useState(new Date().toLocaleTimeString())
    const [Visible, setVisible] = useState(false)

    useEffect(() => {
      let temporizador

      if (Visible) {
        temporizador=setInterval(() => {
            setHora(new Date().toLocaleTimeString())
        }, 1000);
      }else{
        clearInterval(temporizador)
      }

      return () => { 
        console.log("Fase de Desmontaje")
        clearInterval(temporizador)

      }

    }, [Visible])


    return (
        <div>
            {Visible && <Reloj hora={Hora}/>}
            <button onClick={() => { setVisible(true) }}>Iniciar</button>
            <button onClick={() => { setVisible(false) }}>Detener</button>
        </div>
    )
}

export default RelojHooks