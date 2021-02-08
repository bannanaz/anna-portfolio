import styled from 'styled-components';
import anna_square from './img/anna_square.jpg';
import Nav from './Nav';


const StyledDivBackr = styled.div`
width: 100%;
background-color: #F4F9F7;
`;

const StyledDiv = styled.div`
margin: auto;
display: flex;
justify-content: center;
flex-wrap: nowrap;
align-items: center;
background-color: #F4F9F7;
width: 75%;
@media screen and (max-width: 900px) {
    flex-wrap: wrap-reverse;
}

img {
    width: 32%;
    justify-content: center;
    border-radius: 50%;
    border: solid 15px white;
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
 
    @media screen and (max-width: 900px) {
        width: 65%;
        margin-left: 0px;
    }
}

`;

const StyledDiv2 = styled.div`
display: flex;
flex-direction: column;
align-items: left; 
margin-top: 75px;
@media screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    margin-right: 0px;
    margin-top: 10px; 
}

 p {    
    font-family: 'Open Sans', sans-serif;
    width: auto;
    font-size: 20px;
    margin-right: 30px;

    @media screen and (max-width: 1200px) {
         font-size: 18px;    
         margin-right: 15px;   
    }

     @media screen and (max-width: 900px) {
        text-align: center;
        margin-right: 0px; 
    }

`;

function IntroSection() {
    return (
        <StyledDivBackr>
            <StyledDiv>
                <StyledDiv2>
                    <p>Hi!</p>
                    <p>I'm Anna, a junior front-end developer living in Stockholm, Sweden. Here you'll find the work I'm most proud of, and a collection of smaller projects I've done for fun. Check them out or read my story. Best regards, Anna.</p>
                    <nav>
                        <Nav />
                    </nav>
                </StyledDiv2>
                <img src={anna_square} alt="Image of Anna Pettersson, junior front-end developer from Stockholm, Sweden." />
            </StyledDiv>
        </StyledDivBackr>
    )
}

export default IntroSection;