import styled from 'styled-components';
import bgcontact from './img/bgcontact.jpg';
import { useState } from 'react';

const StyledDivBackgr = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
background-image: url(${bgcontact});
background-size: cover;
background-repeat: no-repeat;

    h2 {
        font-family: 'Permanent Marker', cursive;
        color: white;
        font-size: 50px;
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }
`;

const Contact = () => {
  return (
    <StyledDivBackgr> 
        <h2>SAY HELLO!</h2>
    </StyledDivBackgr>
    );
  }

  export default Contact;
