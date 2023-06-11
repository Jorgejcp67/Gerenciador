import styled from "styled-components";

export const Input = styled.input`
 width:80%;
 text-align:center;
 padding: 12px 20px;
 margin: 10px 20px;
 display: 1px solid #add;
 outline : none;
 border-radius: 4px;
 box-sizing: border-box;
 background-color:#aaa;
`;
export const Select = styled (Input);

export const Button =styled.button `
 width:30%;
 text-align:center;
 background-color:gray;
 color: #fff;
 padding: 14px 14px;
 margin: 20px 50px;
 border : none;
 border-radius: 4px;
 cursor : pointer;
   :hover{
    background-color:darkgray;
   }
   
`;

 