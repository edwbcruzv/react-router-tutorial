import { useEffect, useState } from 'react'


/**
 * Peticion generica con fetch
 * @param url 
 * @returns 
 */
function useFetch(url) {
    const [Data, setData] = useState(null)
    const [IsPending, setIsPending] = useState(true)
    const [Error, setError] = useState(null)

    useEffect(() => {
        const getData = async (url) => {

            try {
                let res = await fetch(url)
                if (!res.ok) { // en el caso de haber un error
                    throw {
                        error: true,
                        status: res.status,
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText
                    }
                }
                // en caso de no haber ningun error
                let data = await res.json()
                setIsPending(false)
                setData(data)
                setError({ error: false })

            } catch (error) {
                setIsPending(true)
                setError(error)
            }
        }

        getData(url)
    }, [url])


    return { Data, IsPending, Error }
}

export default useFetch