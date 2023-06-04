import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export default class Cadastro extends React.Component{
    render(){
        return(
        <div className="cadastro">
           <center> 
            <h2> Cadastre sua movimentação</h2>

            <h1>Credito</h1>
            <h1>Debito</h1>
            <Link to= "/login">crud</Link>
            </center> 
        </div>
        );
    }
}