import React from "react";
import{Link}from "react-router-dom";
import "./index.css"

export default class Principal extends React.Component{
    render(){
        return(
           <div className="principal">
               <center>
                 
                 <h1>APP de controle financeiro</h1>
                 <h1>Fluxo de caixa</h1>
                 <h1>Credito</h1>
                 <h1>Debito</h1>
                <Link to= "/login">login</Link>
               </center>
              

           </div>

        );
    }
}