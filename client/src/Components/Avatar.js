import React from "react";

export default function Avatar({name, padX, padY, rounded, colour, bg, text}){
    return(
        <>
            <div className={`flex justify-center items-center px-${padX} py-${padY} rounded-${rounded} bg-${bg} text-${text}`}>
                <p>{name}</p>
            </div>
        </>
    )
}