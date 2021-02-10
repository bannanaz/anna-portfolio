import styled from 'styled-components';
import bgcontact from './img/bgcontact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const StyledDivBackgr = styled.div`
width: 100%;
height: 350px;
background-image: url(${bgcontact});
background-size: cover;
background-repeat: no-repeat;
position: relative;

    main {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center; 
        width: 70%; 
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
      
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

        a { 
            color: white; 
            text-decoration: none; 
            font-size: 26px;
            display: block;
            line-height: 1.5em;
            text-align: center;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                color: lightgray;
            }
        }
`;

const Contact = () => {
    return (
        <StyledDivBackgr>
            <main>
                <h2>SAY HELLO!</h2>
                <a href="mailto:anlepet@gmail.com">Mail: anlepet@gmail.com</a>
                <a href="tel:0709-301246">Phone: +46 709-30 12 45</a>
                <a href="https://www.linkedin.com/in/anlepet/" target="_blank"> Linkedin</a>
            </main>
        </StyledDivBackgr>

    );
}

export default Contact;
