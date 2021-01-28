import { useState } from 'react';
import styled from 'styled-components';
import quire from './img/quire.jpg';

const StyledDiv = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 30px;
margin-bottom: 30px;

img {
    width: 800px;
    flex-shrink: 1;
}

`;

const StyledDivText = styled.div`
width: 400px;
flex-shrink: 1;

h2 {
    margin-top: 15px;
    margin-bottom: 10px;
}

p {
    margin-right: 20px;
}

`;





function Work() {

    const [projects, setProjects] = useState([
        { title: 'Multifunctional notebook', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://raw.githubusercontent.com/bannanaz/images/main/img/quire.jpg', id: 1 },
        { title: 'Museum landing page', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: 'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ', id: 2 }
    ]);

    return (
        <div>
            {projects.map((project) => (
                <StyledDiv key={project.id}>
                    <StyledDivText>
                        <h2>{project.title}</h2>
                        <p>{project.body}</p>
                    </StyledDivText>
                    <img src={project.image} />
                </StyledDiv>
            ))}
        </div>
    );
}
export default Work;