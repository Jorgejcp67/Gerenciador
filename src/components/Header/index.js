import React from "react";
import{NavBar} from "../../styles/geral-styles";

import "./index.css";
import { Link } from "react-router-dom";


// primeiro componente
const Header =()=>(
    <NavBar>
         <li>
            <Link to={'/'}>Principal</Link>
         </li>
         <li>
            <Link to={'/Login'}>Login</Link>
         </li>
         <li>
            <Link to={'/fluxo'}>Fluxo</Link>
         </li>
         <li>
            <Link to={'/cadastro'}>Cadastro</Link>
         </li>

    </NavBar>
  

);

export default Header;
