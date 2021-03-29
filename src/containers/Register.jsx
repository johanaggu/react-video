import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const [ form, setValues ] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleInputs = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return ( 
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit} >
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInputs}
            />

          <input
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInputs}
            />

          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInputs  }
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
