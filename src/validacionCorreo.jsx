import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function ValidarCorreo() {
    const [emailInput, setEmailInput] = useState('');
    const navigate = useNavigate();

    const handleValidateEmailButton = async () => {
        try {
            const response = await axios.post('/api/validar-correo', { correo: emailInput });
            if (response.data.success) {
                navigate('/cambioContrasenia');
            } else {
                console.log('Correo electrónico no encontrado en la base de datos');
            }
        } catch (error) {
            console.error('Error al enviar solicitud al servidor', error);
        }
    };

    return (
        <div className="container">
            <h2>Validar Correo Electrónico</h2>
            <form id="forgotPasswordForm">
                <div id="forgotPasswordModal" className="modal">
                    <div className="modal-content">
                        <label htmlFor="emailInput">Correo electrónico:</label>
                        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Example@gmail.com" />
                        <button onClick={handleValidateEmailButton}>Validar correo</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ValidarCorreo;