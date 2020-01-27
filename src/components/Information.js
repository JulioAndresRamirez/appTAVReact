import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//CSS
import "./Styles/Information.css";
//Icons
import datesImg from "./assets/icons/reloj.svg";
import infoImg from "./assets/icons/info.svg";
import peopleImg from "./assets/icons/people.svg";
import placeImg from "./assets/icons/place.svg";
import calendar from "./assets/icons/calendar.svg";
import reloj from "./assets/icons/reloj2.svg";
// Components
import ToeicDefinition from "../components/ToeicDefinition";
import EtDefinition from "../components/EtDefinition";
import { easeOut } from "@popmotion/easing";
import StarRating from "../components/StarRating";

export default function Information(props) {
    // States
    const [data, setData] = useState(props.data);
    const [finish, setFinish] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        console.log("Ok presionado");
    };

    /* const isExam = data => {
        if (data.exam === "TOEIC") {
            return "TOEIC Bridge";
        } else {
            return "ET"; //<span className="et_title">ET</span>;
        }
    }; */

    /*  const isDefinition = data => {
        if (data.exam === "TOEIC") {
            return <ToeicDefinition />;
        } else {
            return <EtDefinition />;
        }
    }; */

    const textVariants = {
        hidden: {
            x: 30,
            opacity: 0
        },
        visible: i => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: i * 0.1,
                ease: easeOut
            }
        })
    };

    if (finish) {
        return <StarRating run={data.results[0].run} />;
    }

    return (
        <div className="Information">
            <div className="info">
                <h3
                    style={{
                        marginBottom: "20px",
                        marginLeft: "0px",
                        paddingLeft: "5px",
                        fontSize: "25px",
                        width: "95%"
                    }}
                >
                    <span className="nombre_alumno">
                        {" "}
                        Hola!
                        <br />
                        {data.results[0].nombre.toLowerCase()}{" "}
                    </span>

                    <p
                        style={{
                            color: "gray",
                            fontWeight: "bold",
                            fontSize: 18,
                            marginTop: "10px"
                        }}
                    >
                        Tienes un total de {data.count} pruebas registradas.
                    </p>
                </h3>
                <p
                    style={{
                        color: "black",
                        marginBottom: "-5px",
                        marginTop: "50px"
                    }}
                    className="subtitle"
                >
                    Información detallada
                </p>

                {/* ITERAR EL MOTION.DIV */}
                <div className="tiles">
                    {data.results.map(prueba => {
                        return (
                            <motion.div
                                className="tile dates"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <p
                                    style={{ textTransform: "capitalize" }}
                                    className="asignatura"
                                >
                                    {prueba.asignatura[0] +
                                        prueba.asignatura
                                            .slice(1)
                                            .toLowerCase()}
                                </p>
                                <p>{prueba.seccion}</p>
                                <div className="tales_description">
                                    <div className="fecha">
                                        <img
                                            src={calendar}
                                            alt="icono_calendario"
                                        />
                                        <p className="info_text">
                                            {prueba.fecha}
                                        </p>
                                    </div>
                                    <div className="hora">
                                        <img
                                            src={reloj}
                                            alt="icono_calendario"
                                        />
                                        <p className="info_text">
                                            {prueba.hora_inicio.substring(0, 5)}{" "}
                                            – {prueba.hora_fin.substring(0, 5)}{" "}
                                        </p>
                                    </div>
                                </div>

                                <div className="sala">
                                    <p className="title2">Sala</p>
                                    <p className="sala_result">{prueba.sala}</p>
                                </div>

                                <div className="docente">
                                    <p className="title2">Docente</p>
                                    <p className="docente_result">
                                        {prueba.docente}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* <motion.div
                        className="tile dates"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <p className="asignatura">Etica</p>
                        <p>FET003-001D</p>
                        <div className="tales_description">
                            <div className="fecha">
                                <img src={calendar} alt="icono_calendario" />
                                <p className="info_text">{data.fecha}</p>
                            </div>
                            <div className="hora">
                                <img src={reloj} alt="icono_calendario" />
                                <p className="info_text">{data.fecha}</p>
                            </div>
                        </div>

                        <div className="sala">
                            <p className="title2">Sala</p>
                            <p className="sala_result">ME-101</p>
                        </div>

                        <div className="docente">
                            <p className="title2">Sala</p>
                            <p className="docente_result">Karen Sepulveda</p>
                        </div>
                    </motion.div> */}
                </div>

                <button onClick={() => setFinish(true)} className="btn_ok">
                    Finalizar
                </button>
            </div>
        </div>
    );
}
