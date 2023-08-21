import { useState } from 'react';
import Login from '../../Auth/Login/Login';
import Registration from '../../Auth/Registro/Registration';
import './FormularioToggle.css';

const FormularioToggle = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleToggleForm = (e) => {
        e.preventDefault();
        setShowRegisterForm(!showRegisterForm);
    };

    return (
        <div className='formulario-toggle-container'>
            <div className='form-container'>
                <div className='form'>
                    <div className='image-form'>
                    </div>

                    {showRegisterForm ? (
                        <Registration /> // Renderiza el componente de registro si showRegisterForm es true
                    ) : (
                        <Login /> // Renderiza el componente de inicio de sesión si showRegisterForm es false
                    )}

                    <p className='message'>
                        {showRegisterForm ? (
                            // Mensaje y botón para cambiar al formulario de inicio de sesión
                            <>
                                ¿Ya tienes una Cuenta?
                                <button
                                    onClick={handleToggleForm}
                                    className='show-login-form'>
                                    Iniciar Sesión
                                </button>
                            </>
                        ) : (
                            // Mensaje y botón para cambiar al formulario de registro
                            <>
                                No estás Registrado
                                <button
                                    onClick={handleToggleForm}
                                    className='show-register-form'>
                                    Crear una Cuenta
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FormularioToggle;
