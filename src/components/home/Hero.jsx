import React from "react";
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
    return (
        <>
         <section classNameName="hero">
                {home.map((val,i) =>(
                    <div classNameName="heroContainer">
                        <h3>{val.text}</h3>
                        <h1>
                            <Typewriter options ={{ strings:['${val.name}','${val.post}','${val.design}'],
                            autoStart:true,loop:true}} />
                        </h1>
                        <p>{val.desc}</p>
                        <button classNameName="primaryBtn">Download CV</button>
                    </div>
                ))}
            </section>
        </>
    )
}