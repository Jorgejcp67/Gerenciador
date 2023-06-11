import React from "react";
import InputText from "../../components/InputText";
import "./index.css";
import { Link, } from "react-router-dom";
import { Button } from "../../styles/form-styles";
import Fluxo from "../fluxo";

export default class Cadastro extends React.Component{
    render(){
        return(
        <div className="cadastro">
           <center> 
               <h1> Cadastre sua movimentação</h1>
                    
                    <InputText
                        id="valor"
                        placeholder="valor da movimentação"
                    ></InputText>
                   

                    <Button className="Credito">Credito</Button>
                     
                    <Button className="Debito">Debito</Button>
                    
                  
            <div>
            <Link to= "/Fluxo">Fluxo</Link>
            </div>
            </center>
        </div>
        );
    }
}