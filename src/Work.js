import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: top;
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
margin-bottom: 40px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: left;
    width: 90%;
}

    img {
        max-width: 900px;
        min-width: 500px;
        flex-shrink: 1;
        border: solid 15px #F4F9F7;
        margin-left: 15px;
            @media screen and (max-width: 900px) {
            margin-left: 0px;
            min-width: 100px;
        }
    }
`;

const StyledDivText = styled.div`
min-width: 280px;
flex-shrink: 2;
margin-right: 15px;

    h2 {
        margin-bottom: 10px;
        padding-top: 40px;
    }

    p{
        font-size: 16px;
         @media screen and (max-width: 1100px) {
            font-size: 14px;
        }
         @media screen and (max-width: 900px) {
            font-size: 16px;
        }
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color: black;
        font-size: 18px;

        &:hover{
        cursor: pointer;
        color: lightgray;
    }
}`;

const StyledDivIcon = styled.div`
display: flex; 
justify-content: left;
flex-wrap: nowrap;
align-items: baseline;
margin-top: 10px;

   p:first-of-type {
        font-size: 16px;
        margin-right: 20px;
    }

    p:nth-of-type(2) {
        font-size: 28px;
        margin-right: 15px;
        color: rgb(24,147,206);
        
    }

    p:nth-of-type(3) {
        font-size: 28px;
        margin-right: 15px;
        color: rgb(250,104,18);
    }

    p:nth-of-type(4) {
        font-size: 28px;
        margin-right: 15px;
        color: rgb(227,206,61);
        padding-bottom: 5px;
    }
`;




function Work() {

    const [projects, setProjects] = useState([
        {
            title: 'Multifunctional notebook', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://raw.githubusercontent.com/bannanaz/images/main/img/quire.png', github: '', html5: <FontAwesomeIcon icon={faHtml5} />, css: <FontAwesomeIcon icon={faCss3Alt} />, js: <FontAwesomeIcon icon={faJs} />, id: 2
        },
        {
            title: 'Museum landing page', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            image: 'https://raw.githubusercontent.com/bannanaz/images/main/img/museum.jpg', github: 'https://github.com/bannanaz/individuella1', html5: <FontAwesomeIcon icon={faHtml5} />, css: <FontAwesomeIcon icon={faCss3Alt} />, js: <FontAwesomeIcon icon={faJs} />, id: 1
        }
    ]);

    return (
        <div>
            {projects.map((project) => (
                <StyledDiv key={project.id}>
                    <StyledDivText>
                        <h2>{project.title}</h2>
                        <p>{project.body}</p>
                        <br></br>
                        <p>View code at: <a href={project.github} target="_blank">GitHub</a></p>
                        <StyledDivIcon>
                            <p>Technologies:</p>
                            <p>{project.html5}</p>
                            <p>{project.css}</p>
                            <p>{project.js}</p>
                        </StyledDivIcon>
                    </StyledDivText>
                    <img src={project.image} />
                </StyledDiv>
            ))}
        </div>
    );
}
export default Work;