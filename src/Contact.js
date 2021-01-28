import styled from 'styled-components';
import bgcontact from './img/bgcontact.jpg';

const StyledDivBackgr = styled.div`
width: 100%;
margin: auto;
background-image: url(${bgcontact});
background-size: cover;
background-repeat: no-repeat;

    form {
    width: 85%;
    margin: auto;    
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 60px;
    }

    h2 {
        font-family: 'Permanent Marker', cursive;
        color: white;
        font-size: 50px;
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }

    input[type=text] {
        flex: 1 1 60px;
        max-width: 500px;
        margin: 10px;
        border-radius: 10px;

        @media screen and (max-width: 1000px) {
            flex: 1 1 50px;
            max-width: 400px;
        }

        @media screen and (max-width: 500px) {
            flex: 1 1 40px;
            width: 85%;
        }
        
    }

    input[type=textarea] {
        max-width: 500px;
        min-width: 200px;
        margin: 20px;
        border-radius: 10px;

        @media screen and (max-width: 1000px) {
            flex: 1 1 200px;
            max-width: 400px;
        }

        @media screen and (max-width: 500px) {
            flex: 1 1 180px;
            width: 85%;
        }
    }

     input[type=submit] {
        margin-top: 20px;
        width: 180px;
        height: 60px;
        border-radius: 10px;
        font-family: 'Permanent Marker', cursive;
        font-size: 26px;
        color: white;
        background-color: #FD8A49;
        border: none;
        @media screen and (max-width: 500px) {
            font-size: 22px;
            width: 160px;
            height: 50px;
        }
    }
   
}
`;

function Contact() {
    return (
        <StyledDivBackgr>
            <form>
                <h2>SAY HELLO!</h2>
                <input type="text" placeholder="Your e-mail"></input>
                <input type="textarea" placeholder="Your message"></input>
                <input type="submit" value="SKICKA"></input>
            </form>
        </StyledDivBackgr>
    );
}
export default Contact;

