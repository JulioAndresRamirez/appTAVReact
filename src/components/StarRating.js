import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import { withStyles } from "@material-ui/core/styles";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import axios from "axios";
import { Link } from "react-router-dom";
// CSS
import "./Styles/StarRating.css";

const StyledRating = withStyles({
    iconEmpty: {
        color: "#000"
    }
})(Rating);

export default function StarRating(props) {
    const [rating, setRating] = useState(1);

    const instanceAxios = axios.create();

    instanceAxios.defaults.headers.post["Content-Type"] = "application/json";

    const onStartClick = (e, value) => {
        console.log(props.run);
        setRating(value);
    };

    const handleSend = () => {
        console.log(rating);
        instanceAxios
            .post("https://estebanartigas.pythonanywhere.com/api/ratings/", {
                run: props.run,
                rating_value: rating
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    return (
        <div className="StarRating">
            <div className="superior">
                <h2>¡Gracias!</h2>
                <p>Califica tu experiencia con el servicio.</p>

                <StyledRating
                    style={{
                        transform: "scale(1.5)",
                        background: "#3565f2",
                        padding: "5px 15px",
                        borderRadius: "50px",
                        marginTop: "10px",
                        boxShadow: "0 5px 13px 0 rgba(0, 0, 0, 0.11);"
                    }}
                    name="size-large"
                    value={0}
                    size="large"
                    onChange={onStartClick}
                    emptyIcon={
                        <StarBorderIcon fontSize="inherit" color="#000" />
                    }
                />
            </div>
            <div className="Action">
                <Link className="btn_rating" to="/" onClick={handleSend}>
                    Calificar
                </Link>
            </div>
        </div>
    );
}
