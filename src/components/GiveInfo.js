import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
// CSS
import "./Styles/GiveInfo.css";

// Component
import Loading from "./Loading";
import Information from "./Information";
import Error from "./Error";
import ErrorNetwork from "./ErrorNetwork";
// Hooks
import useFormRut from "./hooks/useFormRut";
// Helpers
import validarRut from "../helpers/validarRut";

const INITIAL_STATE = {
    Id: ""
};

export default function GiveInfo() {
    //states
    const {
        handleOnSubmit,
        handleChange,
        handleBlur,
        values,
        run,
        error
    } = useFormRut(INITIAL_STATE, validarRut);

    const [estado, setEstadoCode] = useState(null);
    const [errors, setError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(false);

    // Animaciones
    const listAnimation = {
        hidden: {
            y: 50,
            opacity: 0
        },
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: { duration: i * 0.3, ease: "easeOut" }
        })
    };

    useEffect(() => {
        if (run != null) {
            fetchData(run);
        }
    }, [run]);

    const fetchData = async run => {
        setLoading(true);

        // URL: https://estebanartigas.pythonanywhere.com/api/datatav/?search=194120419
        try {
            const response = await axios.get(
                `https://estebanartigas.pythonanywhere.com/api/datatav/?search=${run}`
            );

            console.log(response.data);

            // SI es valor de response.data.count == 0 ¡ERROR!

            setDatos(response.data);
            setEstadoCode(response.status);

            if (response.data.count === 0) {
                setEstadoCode(404);
            }
        } catch (error) {
            console.log(error.response);
            setError(true);
            // Handle Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                setMessageError(error.response.statusText);
                setEstadoCode(error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                setEstadoCode(error.request.status);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            // console.log(error.config);
        }

        setLoading(false);
    };

    // Render

    if (loading === true) {
        return <Loading />;
    }

    if (estado == 404) {
        return <Error />;
    }

    if (estado == 0) {
        return <ErrorNetwork />;
    }

    if (loading === false && datos != null) {
        return <Information data={datos} />;
    }

    return (
        <div className="GiveInfo">
            <motion.div className="Desc">
                <motion.p
                    className="Text1"
                    initial="hidden"
                    animate="visible"
                    variants={listAnimation}
                    custom={1}
                >
                    Ingresa tu RUT en el siguiente formato.
                </motion.p>
                <motion.p
                    className="Text2"
                    initial="hidden"
                    animate="visible"
                    variants={listAnimation}
                    custom={1.25}
                >
                    {" "}
                    11111111-1
                </motion.p>
                <motion.form
                    method="POST"
                    className="formID"
                    id="IDform"
                    onSubmit={handleOnSubmit}
                    //animations
                    initial="hidden"
                    animate="visible"
                    variants={listAnimation}
                    custom={1.5}
                >
                    <input
                        style={{
                            textTransform: "uppercase"
                        }}
                        name="Id"
                        className="inputID"
                        type="text"
                        placeholder="Ingrese RUT aquí"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        pattern="\d{7,8}-[0-9kK]"
                        maxLength="10"
                        required
                    />
                    {console.log(error.state)}

                    {error.state && (
                        <p className="smallText animated  shake fast">
                            {error.message}
                        </p>
                    )}
                </motion.form>
            </motion.div>

            <div className="Action">
                <button
                    disabled={values.Id === "" ? true : false}
                    className={values.Id === "" ? "button_disabled" : ""}
                    form="IDform"
                    type="submit"
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}
