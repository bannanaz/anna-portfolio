import styled from 'styled-components';

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
        margin-bottom: 10px;
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
`;

function About() {
    return (
        <StyledDiv>
            <h2>MY STORY</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br></br>
            <ul>
                <h2>WORK</h2>
                <li>IKEA</li>
                <li>IKEA</li>
                <li>IKEA</li>
            </ul>
            <ul>
                <h2>EDUCATION</h2>
                <li>IKEA</li>
                <li>IKEA</li>
                <li>IKEA</li>
            </ul>
        </StyledDiv >
    );
}

export default About;