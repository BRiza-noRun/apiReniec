import './App.css';

import { useState } from 'react';

function App() {
  const [dni, setDni] = useState('');
  const [datos, setDatos] = useState({});

  const handleButtonClick = () => {
    fetch("https://apiperu.dev/api/dni/" + dni+"?api_token=52d4a4c1911f8a84793152a20455cde817ba307af2919328dcacf71da4d481f4")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data.data);
      });
  };

  return (
    <div className="App">
      <h1>API BUSCAR PERSONA POR DNI</h1>
      <p>API RENIEC</p>
      <div className="container">
        <div className="input">
          <input
            className="dni"
            id="dni"
            name="dni"
            placeholder="Número de DNI"
            type="number"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>
        <div className="button">
          <button id="boton" onClick={handleButtonClick}>
            BUSCAR
          </button>
        </div>
      </div>
      <div className="resultado">
        <div className="dni">
          <div className="label">
            <h2>Dni</h2>
          </div>
          <div className="res">
            <p id="doc">{datos.numero || ''}</p>
          </div>
        </div>
        <div className="nombre">
          <div className="label">
            <h2>Nombre</h2>
          </div>
          <div className="res">
            <p id="nombre">{datos.nombres || ''}</p>
          </div>
        </div>
        <div className="apellido">
          <div className="label">
            <h2>Apellido</h2>
          </div>
          <div className="res">
            <p id="apellido">{`${datos.apellido_paterno || ''} ${datos.apellido_materno || ''}`}</p>
          </div>
        </div>
        <div className="cui">
          <div className="label">
            <h2>Cui</h2>
          </div>
          <div className="res">
            <p id="cui">{datos.codigo_verificacion || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;