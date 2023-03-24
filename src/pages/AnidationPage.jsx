import React, { useState } from 'react'
import SelectList from '../Anidacion/SelectList'


function AnidationPage() {
  const [state, setState] = useState(true)
  const [town, setTown] = useState('')
  const [suburb, setSuburb] = useState('')

  return (
    <div>
      <h3>Mexico</h3>

      {/* {state&&<SelectList title='estado' url='https://api.copomex.com/query/get_estados?token=pruebas' handleChange={(e)=>{setState(e.target.value)}}/>} */}
      {state&&<SelectList title='municipios' url='https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas' handleChange={(e)=>{setTown(e.target.value)}}/>}
      {state&&<SelectList title='colonia' url='' handleChange={(e)=>{setSuburb(e.target.value)}}/>}
      <pre>
        <code>
          {state}-{town}-{suburb}
        </code>
      </pre>
    </div>
  )
}

export default AnidationPage