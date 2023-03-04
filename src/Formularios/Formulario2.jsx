import React from 'react'
import { useState } from 'react'

function Formulario2() {
    const [form, setForm] = useState({})
    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleChecked =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.checked,
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        alert("el fomulario de ha enviado")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"id='nombre' name='nombre'  onChange={handleChange}/>
            <label htmlFor="nombre">{form.nombre}</label>
            

            <p>Elije uno: {form.sabor}</p>
            <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={handleChange} />
            <label htmlFor="vanilla">Vanilla</label>
            <input type="radio" name="sabor" id="react" value="react" onChange={handleChange} defaultChecked/>
            <label htmlFor="react">React</label>
            <input type="radio" name="sabor" id="angular" value="angular" onChange={handleChange} />
            <label htmlFor="angular">Angular</label>
            <input type="radio" name="sabor" id="vue" value="vue" onChange={handleChange} />
            <label htmlFor="vue">Vue</label>

            <p>Elije un lenguaje: {form.lenguaje}</p>
            <select name="lenguajes" onChange={handleChange}>
                <option value="">-----</option>
                <option value="js">Javascript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">Go</option>
                <option value="rb">Ruby</option>
            </select>

            <h4>Terminos y condiciones</h4>
            <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Formulario2