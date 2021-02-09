import styled from 'styled-components';
import Cv from './Cv';
import CVWORK from './dataCv.js';

const StyledDiv = styled.div`
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 40px; 
margin-bottom: 40px;
    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    h2 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 30px;
        margin-bottom: 15px;
    }

    p {    
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-size: 20px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
            @media screen and (max-width: 1200px) {
                font-size: 18px;      
            }
            @media screen and (max-width: 900px) {
                width: 85%;
                margin-left: auto;
                margin-right: auto;
            }
    }

    > div:first-of-type {
        margin-top: 30px;
    }

    > div:last-of-type {
        margin-top: 8px;
    }
`;

function About() {
    return (
        <StyledDiv>
            <h2>MY STORY</h2>
            <p>My interest in web development was sparked while working at IKEA Sweden’s marketing department. As a PR Specialist I worked close to the IKEA web-team and got glimpses of their work day. I would describe myself as creative with a logical mind, a perfect match for the front-end developer profession (I hope). I’m a good teammate and like to surround myself with fun and laughter. I’m used to, and enjoy working in a large (global) organisation delivering on several projects and deadlines simultaneously.</p>
            <div>
                <h2>WORK EXPERIENCE</h2>
                <Cv dataCv={CVWORK.worklist.filter((item) => item.label === 'work')} />
            </div>
            <div>
                <h2>EDUCATION</h2>
                <Cv dataCv={CVWORK.worklist.filter((item) => item.label === 'education')} />
            </div>
        </StyledDiv >
    );
}

export default About;