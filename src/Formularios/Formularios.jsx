import React from 'react'
import { useState } from 'react'

function Formularios() {
    const [nombre, setNombre] = useState("")
    const [sabor, setSabor] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault()
        alert("el fomulario de ha enviado")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre"></label>
            <input type="text"id='nombre' name='nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

            <p>Elije uno: {sabor}</p>
            <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={(e)=>setSabor(e.target.value)} />
            <label htmlFor="vanilla">Vanilla</label>
            <input type="radio" name="sabor" id="react" value="react" onChange={(e)=>setSabor(e.target.value)} defaultChecked/>
            <label htmlFor="react">React</label>
            <input type="radio" name="sabor" id="angular" value="angular" onChange={(e)=>setSabor(e.target.value)} />
            <label htmlFor="angular">Angular</label>
            <input type="radio" name="sabor" id="vue" value="vue" onChange={(e)=>setSabor(e.target.value)} />
            <label htmlFor="vue">Vue</label>

            <p>Elije un lenguaje: {lenguaje}</p>
            <select name="lenguajes" onChange={(e)=>setLenguaje(e.target.value)}>
                <option value="">-----</option>
                <option value="js">Javascript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">Go</option>
                <option value="rb">Ruby</option>
            </select>

            <h4>Terminos y condiciones</h4>
            <input type="checkbox" name="terminos" id="terminos" onChange={(e)=>setTerminos(e.target.checked)} />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Formularios