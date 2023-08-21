import { useState } from 'react';
import './RecoverPassword.css';

const RecoverPassword = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordRecovery = (e) => {
        e.preventDefault();

        // Aquí puedes agregar la lógica para enviar el correo de recuperación de contraseña
        // Por simplicidad, solo mostraremos un mensaje de éxito ficticio

        setSuccessMessage(`Se ha enviado un correo de recuperación a ${email}`);
        setErrorMessage('');
    };

    return (
        <div className='recover-password-container'>
            <form
                className='recover-password-form'
                onSubmit={handlePasswordRecovery}>
                <h2>Recuperar Contraseña</h2>
                <p>
                    Ingresa tu nombre de usuario y correo electrónico asociado
                    para recuperar tu contraseña.
                </p>
                <input
                    type='text'
                    id='username-recovery'
                    placeholder='Usuario'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='email'
                    id='email-recovery'
                    placeholder='Correo Electrónico'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type='submit'>Enviar Correo de Recuperación</button>
                {successMessage && (
                    <p className='success-message'>{successMessage}</p>
                )}
                {errorMessage && (
                    <p className='error-message'>{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default RecoverPassword;
