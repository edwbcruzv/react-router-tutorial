import React from "react";
import Loader from "../Anidacion/Loader";
import Message from "../Anidacion/Message";
import useForm from "../Hooks/useForm";

const style_inputs = {
  border: "thin solid #dedede",
  borderRadius: "0.25rem",
  padding: "0.75rem",
  marginBottom: "1rem",
  outline: "none",
  display: "block",
  width: "100 %",
  fontSize: "1rem",
  lineHeight: 1,
  backgroundColor: "transparent",
  resize: "none"
}

const style_form={
  marginBottom: "1rem"
}

const style_button = {
  border: "thin solid #444",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  margin: "0 0.5rem 0 0",
  display: "inline - block",
  backgroundColor:" #eee",
  color: "#444",
  fontWeight: "bold",
  fontSize: "1rem",
  lineHeight: 1,
  textTransform: "none",
  textDecoration: "none",
  textAlign: "center",
  verticalAlign: "middle",
  cursor: "pointer"
}

const style_errors={
  fontWeight:"bold",
  color: "#dc3545"
}

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: ""
};

function validationForm(form) {
  let errors={}

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexComments = /^.{1,255}$/

  if (!form.name.trim()) {
    errors.name="El campo Nombre es requerido"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco"
  }

  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El Email es incorrecto"
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo Asunto es requerido"
  } 

  if (!form.comments.trim()) {
    errors.comments = "El comentario son requerido"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "el comentario no debe de exceder los 255 caracteres"
  }

  return errors
}

function ContactFormPage() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);
  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit} style={style_form}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
          style={style_inputs}
        />
        {errors.name && <p style={style_errors}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          style={style_inputs}
        />
        {errors.email && <p style={style_errors}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Escribe el asunto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.subject}
          required
          style={style_inputs}
        />
        {errors.subject && <p style={style_errors}>{errors.subject}</p>}
        <textarea
          name="comments"
          placeholder="Escribe tus comentarios"
          cols={50}
          rows={5}
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.comments}
          required
          style={style_inputs}
        />
        {errors.comments && <p style={style_errors}>{errors.comments}</p>}

        <input type="submit" value="Enviar" style={style_button}/>
      </form>
        {loading&&<Loader/>}
        {response && <Message msg="Los datos fueron enviados" bgColor="#198754"/>}
    </div>
  );
}

export default ContactFormPage;
