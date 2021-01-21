import styled from 'styled-components';
import anna_square from './img/anna_square.jpg';
import Nav from './Nav';


const StyledDivBackr = styled.div`
width: 100%;
background-color: #F4F9F7;
`;

const StyledDiv = styled.div`
margin: auto;
padding: 40px 0px;
display: flex;
justify-content: center;
flex-wrap: wrap-reverse;
align-items: center;
background-color: #F4F9F7;
width: 85%;


img {
    flex: 1;
    max-width: 320px;
    justify-content: center;
    border-radius: 50%;
    border: solid 20px white;
    margin-left: 40px;
    margin-right: 40px;
}


 p {    
    flex: 1;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    max-width: 550px;
    min-width: 200px;
    margin-left: 40px;
    margin-right: 40px;
    }
`;



function IntroSection() {
    return (
        <StyledDivBackr>
            <StyledDiv>
                <div>
                    <br></br>
                    <p>Hi!</p>
                    <p>I’m Anna, a future Front End Developer living in Stockholm, Sweden. Here you'll find the work I'm most proud of, and a collection of smaller projects I've done for fun. Check them out or read my story. Welcome. Skriver lite mer text så blir allt mkt bättre. </p>
                    <nav>
                        <Nav />
                    </nav>
                </div>
                <img src={anna_square} alt="Image of Anna Pettersson, Front End Developer from Stockholm, Sweden." />
            </StyledDiv>
        </StyledDivBackr>
    )
}

export default IntroSection;