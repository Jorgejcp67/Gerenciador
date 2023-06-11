import React from "react";
//import{ Link, }from "react-router-dom";
import { Button, } from "../../styles/form-styles";
import { DivPersonalisada } from "../../styles/geral-styles";
import InputText from "../../components/InputText";
import "./index.css";

const Login =()=>{
    return(
        <DivPersonalisada 
          width="250px"
          margin="auto"
          border="1px solid #ddd"
          
          marginTop="50px">

            <div className="Logo">
            <h1>Login</h1>
            </div>

            <div className="nomes">

              
                <InputText
                  id="email"
                  placeholder="exemplo@exemplo,com"
                  text="E-mail"
                ></InputText>

                <InputText
                  id="senha"
                  placeholder="123456"
                  text="senha"
                ></InputText>
            
                
           
                <Button>Entrar</Button>

            </div>
              <div className="esqueci-senha">
              <a href="#">recuperar senha</a>
            
            </div>
        </DivPersonalisada>   
       
    );
}
export default Login;

//export default class Login extends React.Component{
    //render(){
       // return(
       // <div className ="login">
           // <center>
             //<h1>Nome</h1>
            // <h1> Telefone</h1>
            // <h1> Senha</h1>
             //<Link to= "/fluxo"> fluxo</Link>
            //</center>
       // </div>
        //);
    //}
//}