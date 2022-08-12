import React from 'react'
import useFetch from './useFetch'

function HookPersonalizado() {
    // console.log(useFetch())
    let url=" https://pokeapi.co/api/v2/pokemon"
    const {Data,IsPending,Error}=useFetch(url)
  return (
    <div>
        <h4>{JSON.stringify(IsPending)}</h4>
        <h4><mark>{JSON.stringify(Error)}</mark></h4>
        <h4><code>{JSON.stringify(Data)}</code></h4>
    </div>
  )
}

export default HookPersonalizado