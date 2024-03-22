import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ValidarCorreo from './validacionCorreo'; // Corregido el nombre de importación
import CambioContrasenia from './cambioContrasenia'; // Corregido el nombre de importación

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/validacionCorreo" element={<ValidarCorreo/>} /> 
                <Route path="/cambioContrasenia" element={<CambioContrasenia/>} /> 
            </Routes>
        </Router>
    );
}
export default App;
