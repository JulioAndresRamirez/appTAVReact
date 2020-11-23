import React from 'react';
// CSS
import './Styles/Error.css';
// IMg
import Error_img from './assets/Error_img/error_notFound.png';

export default function Error(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className="Error"
    >
      <div
        style={{
          marginTop: '-50px',
        }}
      >
        <img src={Error_img} alt="Not Found" />

        <h1
          style={{
            color: 'black',
            fontSize: '24px',
            marginBottom: '10px',
          }}
        >
          No se encontraron Examanes Transversales relacionados a ti.
        </h1>
        <p
          style={{
            color: 'black',
            fontSize: '14px',
            opacity: 0.7,
          }}
        >
          Contacta a tu coordinador para mas información.
        </p>
      </div>
    </div>
  );
}
