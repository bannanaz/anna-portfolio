import styled from 'styled-components';
import anna_square from './img/anna_square.jpg';


const StyledDivBackr = styled.div`
width: 100%;
background-color: #F4F9F7;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: space-around;
align-content: center;
flex-wrap: wrap-reverse;
background-color: #F4F9F7;
width: 80%;
align-items: center;
margin: auto;

img {
    width: 330px;
    height: auto;
    border-radius: 50%;
    border: solid 20px white;
    margin: 60px 30px;
}

 p {    
    flex: 1;
    font-family: 'Open Sans', sans-serif;
    font-size: 22px;
    min-width: 450px;
    margin: 0px 30px;
    }
`;



function IntroSection() {
    return (
        <StyledDivBackr>
            <StyledDiv>
                <p>Hi, I’m Anna, a future Front End Developer living in Stockholm, Sweden. Here you'll find the work I'm most proud of, and a collection of smaller projects I've done for fun. Check them out or read my story. Welcome.</p>
                <img src={anna_square} alt="Image of Anna Pettersson, Front End Developer from Stockholm, Sweden." />
            </StyledDiv>
        </StyledDivBackr>
    )
}

export default IntroSection;