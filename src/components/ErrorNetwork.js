import React from "react";
// CSS
import "./Styles/Error.css";
// Img
import Error_img from "./assets/Error_img/error_network.png";

export default function ErrorNetwork(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            className="Error"
        >
            <div
                style={{
                    marginTop: "-50px"
                }}
            >
                {/*<img src={Error_img} alt="Not Found"/>*/}

                <h1
                    style={{
                        fontSize: "24px",
                        marginBottom: "10px"
                    }}
                >
                    Limited or unavailable network
                </h1>
            </div>
        </div>
    );
}
