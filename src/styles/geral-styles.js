import styled from "styled-components";

export const NavBar = styled.ul`
 list-style-type: none;
    margin:0;
    padding:0;
    overflow: hidden;
    background-color:#333;

    li {
        float: left;

        /* :last-child{
            float:right;
        } */
    }

    li a {
        display: block;
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
        text-align:center;

        :hover{
            background-color: #111;
        }

    }


`;