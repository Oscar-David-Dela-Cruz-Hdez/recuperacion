import React, { useState } from 'react';

function CambioContrasenia() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePasswordButton = () => {
        // Lógica para cambiar la contraseña
    };

    return (
        <div className="container">
            <h2>Nueva Contraseña</h2>
            <form id="changePasswordForm">
                <div id="changePasswordModal" className="modal">
                    <div className="modal-content password-modal">
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

export default CambioContrasenia;
