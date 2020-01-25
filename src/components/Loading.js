import React from "react";
import Lottie from "react-lottie";
// assets
import "./Styles/Loading.css";
import animationData from "../animations/loading3.json";

export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        redererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="Loading">
            {/* <img src={LoadingImg} alt="loading" /> */}
            <div>
                <Lottie
                    className="Loading--image"
                    options={defaultOptions}
                    height={150}
                    width={150}
                />
            </div>
        </div>
    );
}
