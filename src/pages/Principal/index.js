import React from "react";
import{Link}from "react-router-dom";
import "./index.css"

export default class Principal extends React.Component{
    render(){
        return(
           <div className="principal">
               <center>
                 
                 <h1>APP de controle financeiro</h1>
                 <h2>Fluxo de caixa</h2>
                 
                 <h2>Credito</h2>
                 <h2>Debito</h2>
                <Link to= "/login">login</Link>
               </center>
              

           </div>

        );
    }
}