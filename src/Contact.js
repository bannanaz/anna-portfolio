import styled from 'styled-components';
import bgcontact from './img/bgcontact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const StyledDivBackgr = styled.div`
width: 100%;
background-image: url(${bgcontact});
background-size: cover;
background-repeat: no-repeat;

    main {
        width: 50%;
        margin: auto;
        padding-top: 40px;
        padding-bottom: 40px;
        color: white;
    }

    h2 {
        font-family: 'Permanent Marker', cursive;
        color: white;
        font-size: 50px;
        margin-bottom: 10px;
        text-align: center;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }
`;

const StyledDivSection = styled.div`
margin-bottom: 20px; 
margin-top: 20px; 

a { 
    color: white; 
    text-decoration: none; 
    margin-left: 20px;
    font-size: 22px;
    display: block;
    line-height: 1.5em;
}


`


const Contact = () => {
  return (
    <StyledDivBackgr> 
        <main>
            <h2>SAY HELLO!</h2>
            <StyledDivSection>
                <a href="mailto:anlepet@gmail.com">Mail: anlepet@gmail.com</a>
                <a href="tel:0709-301246">Phone: +46 709-30 12 45</a>
                <a href="https://www.linkedin.com/in/anlepet/" target="_blank">Linkedin</a>
            </StyledDivSection>        
        </main>
    </StyledDivBackgr>
  
    );
  }

  export default Contact;
