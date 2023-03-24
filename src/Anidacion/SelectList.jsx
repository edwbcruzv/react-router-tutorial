import React from 'react'
import useFetch from '../Hooks/useFetch'
import Loader from './Loader'
import Message from './Message'


function SelectList({title,url,handleChange}) {
    const {Data,IsPending,Error}=useFetch(url)
    console.log("Data:",Data,"IsPending:",IsPending,"Error:",Error)
    
    if (Data===null) {
    return null
    }
    
    if (Error.error===true ) {
        console.log("first")
        return <Message msg={`Error ${Error.status}:${Error.statusText}`} bgColor='#dc3545'/>
    }
    
  let id=`select-${title}`
  let label=title.charAt(0).toUpperCase() + title.slice(1)
  let lista=Data.response.title

  return (
    <div>
        <label htmlFor={id}>{label}</label>
        {IsPending?
        <Loader/>
        :
        <select name={id} id={id} onChange={handleChange}>
            <option value="">Elige un {title}</option>
            {Data&&lista.map((elem,id) => { return <option key={id} value={elem}>{elem}</option> })}
        </select>
  }
    </div>
  )
}

export default SelectList