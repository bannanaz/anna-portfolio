import styled from 'styled-components';
import bird_icon from './img/bird_icon.svg';

const StyledDivBackgr = styled.div`
width: 100%;
background-color: #F4F9F7;
height: auto;

> div {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
  margin: auto;
  background-color: #F4F9F7;
  padding-top: 15px;
  padding-bottom: 30px;
  @media screen and (max-width: 500px) {
    padding-bottom: 2px;
}
  }
  `;

const StyledDivLeftSection = styled.div`
display: flex; 
flex-wrap: wrap;
@media screen and (max-width: 500px) {
  justify-content: center;
}


div {
  display: flex; 
  flex-direction: column;
  width: 200px;
  align-items: left;
     @media screen and (max-width: 500px) {
        align-items: center;
    }
}

 h3 {
    font-family: 'Permanent Marker', cursive;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 5px;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    line-height: 1.4;
    color: black;
  }
`;

const StyledDivRightSection = styled.div`
display: flex; 
flex-direction: column;
align-items: flex-end;
align-content: baseline;
flex: 1;

img {
  flex: 1;
  transform: scale(1.8);
  margin-top: 40px;
  margin-bottom: 15px;
  @media screen and (max-width: 500px) {
    transform: scale(1.9);
    margin-top: 0px;
}
}


p {
  font-family: 'Permanent Marker', cursive;
  font-size: 14px;
  margin-bottom: 3px;
  text-align: right;
  width: 220px;
}

`;



function Footer() {
  return (
    <StyledDivBackgr>
      <div>
        <StyledDivLeftSection>
          <div>
            <h3>PLATFORMS</h3>
            <a href="https://github.com/bannanaz" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/anpettersson/" target="_blank">Instagram</a>
          </div>
          <div>
            <h3>CONTACT</h3>
            <a href="https://www.linkedin.com/in/anlepet/" target="_blank">Linkedin</a>
          </div>
        </StyledDivLeftSection>

        <StyledDivRightSection>
          <img src={bird_icon} alt="Birdie" />
          <p>COPYRIGHT ANNA PETTERSSON</p>
        </StyledDivRightSection>
      </div>
    </StyledDivBackgr>
  );
}

export default Footer;