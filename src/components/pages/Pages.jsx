import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Header } from "../common/Header";
import { Home } from "../home/Home"
import { About } from "./About";
import { Counter } from "./counter";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";


export const Pages = () => {
    return (
        <>
            <Router>
                <Header/>
                <switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} /> 
                    <Route exact path='/services' component={Services} />  
                    <Route exact path='/counter' component={Counter} />  
                    <Route exact path='/portfolio' component={Portfolio} />  
                    <Route exact path='/testimonial' component={Testimonials} />  
                </switch>
            </Router>
        </>
    )
}