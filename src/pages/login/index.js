import React from "react";
import{ Link }from "react-router-dom";
import "./index.css";

export default class Login extends React.Component{
    render(){
        return(
        <div className ="login">
            <center>
             <h1>Nome</h1>
             <h1> Telefone</h1>
             <h1> Senha</h1>
             <Link to= "/fluxo"> fluxo</Link>
            </center>
        </div>
        );
    }
}