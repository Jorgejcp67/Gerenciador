import React from "react";

import "./index.css"
import { Link } from "react-router-dom";

export default class Fluxo extends React.Component{
    render(){
        return(
        <div className="fluxo">
            <center>
                <h1> Fluxo de caixa</h1>
                <h1>Saldo </h1>
                <Link to="/cadastro">cadastro</Link>
            </center>
        </div>
        );
    }
}