import React, {useEffect,useState} from 'react'

function MyUseEffect() {
    const [ScrollY, setScrollY] = useState(0)

    // useEffectnos permite el ciclo de vida de componentes de clase:
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

    // en vez de pensar entre "montar" y "actualizar" pensar  en "despues del renderizado"
    useEffect(() => {
        // se ejecutara al Montaje, Actualizacion y Renderizacion
        console.log("Fase de Actualizacion, moviendo scrollY")
        const detectarScrollY=()=>{
            setScrollY(window.pageYOffset)
        }
        
        window.addEventListener("scroll",detectarScrollY)
        
        // se Especifica como sanear el efecto
        return () => {
            window.removeEventListener("scroll",detectarScrollY)
            console.log("Fase de Desmontaje")
          }
    
    },[ScrollY]) // solo se vuelve a ejecutar si ScrollY cambia (simi lar a comparar prevProps o prevState)

    // useEffect con el segundo parametro definido pero vacia se comporta como Montaje,
    // tambien si queremos montar y desmontar luego luego
    useEffect(() => {
      console.log("Fase de Montaje (unica vez)")
    }, [])// indicamos que el efecto no depende de ninguna variable y no necesitara volverse a ejecutar

    // Sin su segundo parametro definido se comporta como componentDidMount y componentDidUpdate
    // useEffect(() => {
    //     console.log("Fase de Montaje y Actualizacion")
    // })
    

  return (
    <div>
        <h2>ScrollY del navegador {ScrollY}</h2>
    </div>
  )
}

export default MyUseEffect