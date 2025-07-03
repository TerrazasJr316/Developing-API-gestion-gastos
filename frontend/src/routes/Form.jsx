import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import Button from '../components/Button';
import { login, register } from '../js/formularioLogin';

const Form = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSwitch = () => {
    setIsRegister(!isRegister);
    setError('');
    setSuccessMessage('');
    setEmail('');
    setPassword('');
  };

  const manejaFormulario = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    try {
      if (isRegister) {
        await register(email, password);
        setSuccessMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
        setIsRegister(false);
        setPassword('');
      } else {
        await login(email, password);
        window.location.reload(); 
      }
    } catch (err) {
      setError(err.message || 'Ocurrió un error inesperado. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={manejaFormulario} className="h-fit shadow-2xl p-6 rounded-lg bg-gray-700 flex flex-col items-center gap-5 w-full max-w-sm">
      <h1 className="text-emerald-300 text-3xl text-center font-bold">
        {isRegister ? "Crea tu Cuenta" : "Iniciar Sesión"}
      </h1>
      <p className="text-sm text-white">
        {isRegister ? "Ya tienes una cuenta, " : "¿Aún no te registras? "}
        <span className="text-emerald-400 cursor-pointer font-semibold hover:underline" onClick={handleFormSwitch}>
          {isRegister ? "inicia sesión aquí" : "crea una cuenta"}
        </span>
      </p>
      
      {}
      {error && <p className="text-red-400 bg-red-900/60 p-3 rounded-md w-full text-center font-semibold animate-pulse">{error}</p>}
      {successMessage && <p className="text-green-300 bg-green-900/60 p-3 rounded-md w-full text-center font-semibold">{successMessage}</p>}

      <div className="text-white bg-gray-600 rounded-md shadow w-full h-auto flex flex-col p-4 gap-4">
        <div>
          <label className='mb-2 block font-medium'>Correo Electrónico</label>
          <InputForm
            evt={(e) => setEmail(e.target.value)}
            value={email}
            type={"email"}
            placeHolder={"correo@ejemplo.com"}
            isRequired={true}
          />
        </div>
        <div>
          <label className='mb-2 block font-medium'>Contraseña</label>
          <InputForm
            evt={(e) => setPassword(e.target.value)}
            value={password}
            type={"password"}
            placeHolder={"********"}
            isRequired={true}
          />
        </div>
        <div className='mt-3'>
            <Button disabled={loading} text={loading ? "Procesando..." : (isRegister ? "Crear cuenta" : "Ingresar")} />
        </div>
      </div>
    </form>
  );
}

export default Form;
