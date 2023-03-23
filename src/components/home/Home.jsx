import React from "react";
import Typewriter from "typewriter-effect"
import { home } from "../data/dummydata"
import {Hero} from "./Hero"
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Counter } from "../pages/counter";
import { Portfolio } from "../pages/Portfolio";
import { Testimonials } from "../pages/Testimonials";
export const Home = () => {
    return (
        <>
           
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
        </>
    )
}