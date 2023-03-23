import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink} from "../data/dummydata"
import logo  from "../data/images/logo.png"
import { Menu } from "@mui/icons-material"


export const Header = () => {
    const [responsive,setResponsive] = useState(false)
    return <>
        <header>
            <div classNameName="container flexsb">
                <div classNameName="logo">
                    <img src={logo} alt='' />
                </div>
                <div classNameName={responsive ? "hideMenu" : "nav"}>
                    {navlink.map((links, i) =>(
                       <Link to={links.url} key={i}>
                            {links.text}
                       </Link>
                    ))}
                </div>
                <button classNameName="toggle" onClick={() => setResponsive(!responsive)}>
                    <Menu classNameName="icon"></Menu>
                </button>
            </div>
        </header>
    </>
    
}