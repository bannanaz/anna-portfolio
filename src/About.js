import styled from 'styled-components';
import Cv from './Cv';
import CVWORK from './dataCv.js';

const StyledDiv = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px; 
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    h3 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 30px;
        margin-bottom: 15px;
    }

     h2 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        margin-bottom: 15px;
    }

    > p:first-of-type {    
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-size: 20px;
        width: 65%;
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

    > p:last-of-type {
            color: #e1ede5;
            font-size: 100px;
            text-align: center;
            line-height: 0.4;
            margin-bottom: 50px;
    }

    > div:first-of-type {
        margin-top: 10px;

        > p:first-of-type {
            color: #e1ede5;
            font-size: 100px;
            text-align: center;
            line-height: 0.4;
            margin-bottom: 25px;
        }
    }

    > div:last-of-type {
        margin-top: 2px;

         > p:first-of-type {
            color: #e1ede5;
            font-size: 100px;
            text-align: center;
            line-height: 0.4;
            margin-bottom: 25px;
        }
    }
`;

function About() {
    return (
        <StyledDiv>
            <h3>MY STORY</h3>
            <p>My interest in web development was sparked while working at IKEA Sweden’s marketing department. As a PR Specialist I worked close to the IKEA web-team and got glimpses of their work day. I would describe myself as creative with a logical mind, a perfect match for the front-end developer profession. I’m a good teammate and like to surround myself with fun and laughter. I’m used to, and enjoy working in a large (global) organisation delivering on several projects and deadlines simultaneously.</p>
            <div>
                <p>•</p>
                <h2>WORK EXPERIENCE</h2>
                <Cv dataCv={CVWORK.worklist.filter((item) => item.label === 'work')} />
            </div>
            <div>
                <p>•</p>
                <h2>EDUCATION</h2>
                <Cv dataCv={CVWORK.worklist.filter((item) => item.label === 'education')} />
            </div>
            <p>•</p>
        </StyledDiv >
    );
}

export default About;