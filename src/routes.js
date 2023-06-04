import React from "react";
import Header from "./components/Header"

import {BrowserRouter, Routes, Route}from "react-router-dom";

import Principal from "./pages/Principal";
import Cadastro from "./pages/cadastro";
import Fluxo from "./pages/fluxo";
import Login from "./pages/login";
const Rotas =()=> (
    
   
   
    <BrowserRouter>
       <Header></Header>
       
       <Routes>
         <Route exact path= "/" element={<Principal/>}/>
         <Route path= "/cadastro" element={<Cadastro/>}/>
         <Route path="/fluxo" element={<Fluxo/>}/>
         <Route path="/login" element={<Login/>}/>
         
       </Routes>
     
    </BrowserRouter>

);
export default Rotas ;