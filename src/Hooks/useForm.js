import { useState } from "react";
import { helperHTTP } from "../helpers/helperHTTP";



export default function useForm(initialForm,validateForm) {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    function handleBlur(e) {
        handleChange(e)
        setErrors(validateForm(form))

    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(validateForm(form))
        

        if (Object.keys(errors).length===0) {
            alert(`enviando formulario:${form}`)
            setLoading(true)
            helperHTTP().post("https://formsubmit.co/ajax/edwinvillalba@yahoo.com",{
                body:form,
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                }
            }).then((res)=>{
                setLoading(false)
                setResponse(true)
                setForm(initialForm)
                setTimeout(() => {
                    setResponse(false)
                }, 5000);

            })
        }else{
            return
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}