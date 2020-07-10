import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Welcome.css';
// Assets
import Logo from '../components/assets/Logo_app/logoET.png';
import Girls from '../components/assets/imageGirls.png';
import ThanksImages from '../components/assets/Logo_app/logo_escuela_duoc.png';

function welcome() {
  return (
    <div className="Welcome">
      <div className="Content">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
          <p className="descs">
            Consulta información relevante acerca de tus Examenes Transversales.
          </p>
        </div>
        <div className="Thanks">
          <img
            style={{
              width: 150,
            }}
            src={ThanksImages}
            alt="imagen_agradecimiento"
          />
          <p
            style={{
              opacity: 0.6,
              color: '#282828',
            }}
            className="Thanks--captions"
          >
            Este proyecto fue realizado por alumnos de Duoc UC Sede Melipilla en
            colaboración con el Programa de Ingles.
          </p>

          <Link className="button" to="/GiveInfo">
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default welcome;
