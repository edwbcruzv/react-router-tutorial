import React,{useState} from 'react'

function MyUseState() {
    // Declarando una variable de estado Count 

    // const [valor inicial, funcion que permitira actualizarlo] = useState(valor inicial)
    const [Count, setCount] = useState(0)

    
    const [Fruit, setFruit] = useState("banana")
    const [Dance, setDance] = useState("Salsa")


    function clickCount() {
        setCount(Count+1)
    }

    function clickFruit() {
        
    }

    function clickDance() {
        
    }
    
  return (
    <div>
        <p>Presionado {Count } veces</p>
        <button onClick={clickCount} >Click</button>
        <p>Fruta Actual {Fruit}</p>
        <input type="text" name="input_fruit" id="input_Fruit" />
        <button onClick={clickFruit} >Actualizar Fruta</button>
        <p>Baile Actual {Dance}</p>
        <input type="text" name="input_fruit" id="input_Fruit" />
        <button onClick={clickDance} >Actualizar Baile</button>
    </div>
  )
}

export default MyUseState