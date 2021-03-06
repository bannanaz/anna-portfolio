import styled from 'styled-components';
import bgtop from './img/bgtop.jpg';
import bgtopmobile from './img/bgtopmobile.jpg';


const StyledDiv1 = styled.div`
    width: 100%;
    margin: auto;
    background-image: url(${bgtop}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 500px) {
        background-image: url(${bgtopmobile});
    } 
`;

const StyledDiv2 = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;

    @media (max-width: 600px) {
        flex-wrap: wrap;
    }

    p {    
        flex: 1 0 300px;
        font-family: 'Open Sans', sans-serif;
        font-size: 32px;
        color: #FD8A49;
        text-align: right;
        padding-top: 2em;

        @media (max-width: 1000px) {
            font-size: 28px;
        }

        @media (max-width: 600px) {
            flex: 1 0 220px;
            font-size: 26px;
            text-align: center; 
            padding-top: 4em;
            padding-bottom: 4em;
        }
    }

    h1 {
        font-family: 'Permanent Marker', cursive;
        font-size: 8vw;
        text-align: left;
        color: white;

        @media (max-width: 1060px) {
            font-size: 10vw; 
        }

        @media (max-width: 600px) {
            font-size: 12vw; 
        }
    }

    h1:first-of-type {
        padding-top: 140px;
        
        @media (max-width: 1060px) {
            padding-top: 1em;
        }
        @media (max-width: 600px) {
            padding-top: 3em;
        }
    }

    h1:last-of-type {
        padding-bottom: 150px;

        @media (max-width: 900px) {
            padding-bottom: 100px;
        }
         @media (max-width: 600px) {
            padding-bottom: 40px;
        }
    }
`;

function Header() {
    return (
        <StyledDiv1>
            <StyledDiv2>
                <div>
                    <h1>ANNA</h1>
                    <h1>PETTERSSON</h1>
                    <h1>PORTFOLIO</h1>
                </div>
                <p>&lt;front-end developer /&gt;</p>
            </StyledDiv2>
        </StyledDiv1>
    )
}

export default Header;