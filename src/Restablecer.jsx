import React, { useState } from 'react';
import './estilos/restablecer.css'

function CambioContraseña() {
    const [answerInput, setAnswerInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleValidateButton = () => {
        // Lógica para validar la respuesta
    };

    const handleValidateEmailButton = () => {
        // Lógica para validar el correo electrónico
    };

    const handleChangePasswordButton = () => {
        // Lógica para cambiar la contraseña
    };

    return (
        <div className="container">
            <h2>Cambio de Contraseña</h2>
            <p className="question"></p>
            <input type="text" value={answerInput} onChange={(e) => setAnswerInput(e.target.value)} placeholder="Respuesta" />
            <button onClick={handleValidateButton}>Validar</button>

            <form id="forgotPasswordForm">
                <div id="forgotPasswordModal" className="modal">
                    <div className="modal-content">
                        <h2>Restablecer contraseña</h2>
                        <label htmlFor="emailInput">Correo electrónico:</label>
                        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Example@gmail.com" />
                        <button onClick={handleValidateEmailButton}>Validar correo</button>
                        <a href="./" id="regresar">Regresar</a>
                    </div>
                </div>
            </form>

            <form id="changePasswordForm">
                <div id="changePasswordModal" className="modal">
                    <div className="modal-content password-modal">
                        <h2>Nueva Contraseña</h2>
                        <label htmlFor="newPassword">Nueva Contraseña:</label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        <label htmlFor="confirmPassword">Repetir Contraseña:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button onClick={handleChangePasswordButton}>Cambiar Contraseña</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CambioContraseña;
