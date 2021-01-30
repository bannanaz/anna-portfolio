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
flex-wrap: wrap-reverse;
align-items: center;
background-color: #F4F9F7;
width: 90%;


img {
    max-width: 360px;
    min-width: 190px;
    justify-content: center;
    border-radius: 50%;
    border: solid 20px white;
    margin-left: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
    
    @media screen and (max-width: 1200px) {
        max-width: 300px;
        margin-left: 20px;
    }

     @media screen and (max-width: 1000px) {
        max-width: 250px;
        border: solid 15px white;
        margin-left: 20px;

    }
     @media screen and (max-width: 900px) {
        max-width: 350px;
        border: solid 20px white;
        margin-left: 0px;
    }

    @media screen and (max-width: 900px) {
        width: 80%;
    }
}

 p {    
    font-family: 'Open Sans', sans-serif;
    max-width: 550px;
    min-width: 150px;
    font-size: 20px;
    margin-right: 30px;

    @media screen and (max-width: 1200px) {
        max-width 400px;
         font-size: 18px;    
         margin-right: 10px;   
    }

     @media screen and (max-width: 900px) {
        max-width: 600px;
        text-align: center;
        margin-right: 0px;
    }

    @media screen and (max-width: 500px) {
        width: 85%;
        text-align: center;
        margin: auto;
    }

    p:first-of-type {
        padding-top: 70px;
  
      @media screen and (max-width: 900px) {
        padding-top: 0px;   
    }
}
`;

function IntroSection() {
    return (
        <StyledDivBackr>
            <StyledDiv>
                <div>
                    <p>Hi,</p>
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