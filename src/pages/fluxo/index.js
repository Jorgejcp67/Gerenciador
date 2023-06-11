import React from "react";
import InputText from "../../components/InputText";
import "./index.css"
import { Link } from "react-router-dom";

export default class Fluxo extends React.Component{
    render(){
        return(
        <div className="fluxo">
            <center>
                
                <h1> Fluxo de caixa</h1>
                <h1>Saldo </h1>

                <div className="caixa">
                <h1>caixa</h1>
                </div>

                <InputText
                  id="caixa"
                  placeholder="valor do fluxo"
                ></InputText>

                <Link to="/Cadastro">Cadastrar</Link>
            </center>
        </div>
        );
    }
}