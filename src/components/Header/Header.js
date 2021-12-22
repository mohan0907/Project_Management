import React from "react";
import styled from 'styled-components';
//import './App.css';

const HeaderWrapper=styled.div`
background-color: blue;
margin-top: 100px;
border:5px solid black;
height:100px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size:calc(10px+2vmin);
color:white;
`;

const Title = styled.h1` height:64px;
pointer-events: none;
`;
const Header = () =>{
    return(
        <HeaderWrapper>
            <h1>Project Management Board</h1>
        </HeaderWrapper>
    )
};

export default Header;