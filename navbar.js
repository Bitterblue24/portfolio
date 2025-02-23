import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';


function Navbar() {
  return (
        
        <nav>
            <p class="name">Taylor Marie Guasta</p>

            <NavLink to="/" activeStyle>
            <div class="Navlink">Home</div>
            </NavLink>

                <div class="verticalLine"></div>

            <NavLink to="/about" activeStyle>
            <div class="Navlink">About</div>
            </NavLink>
        
                <div class="verticalLine"></div>

            <NavLink to="/social" activeStyle>
            <div class="Navlink">Social</div>
            </NavLink>

                <div class="verticalLine"></div>

            <NavLink to="/projects" activeStyle>
            <div class="Navlink">Projects</div>
            </NavLink>

                <div class="verticalLine"></div>

            <NavLink to="/recommendations" activeStyle>
            <div class="Navlink">Recommendations</div>
            </NavLink>
            
        </nav>   
    
  );
}

export default Navbar;