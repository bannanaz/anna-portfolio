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
  padding-bottom: 20px;
  }
  `;

const StyledDivLeftSection = styled.div`
display: flex; 
 

div {
  display: flex; 
  flex-direction: column;
  width: 200px;
}

 h3 {
    font-family: 'Permanent Marker', cursive;
    font-size: 20px;
    padding-top: 30px;
    padding-bottom: 10px;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    line-height: 1.4;
    color: black;
  }
`;

const StyledDivRightSection = styled.div`
min-width: 200px;
display: flex; 
flex-direction: column;
align-items: flex-end;
align-content: baseline;
flex: 1;

img {
  flex: 1;
  transform: scale(1.8);
  margin-top: 40px;
  margin-bottom: 10px;
}

p {
  font-family: 'Permanent Marker', cursive;
  font-size: 14px;
  margin-bottom: 10px;
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
            <a href="mailto: anlepet@gmail.com">anlepet@gmail.com</a>
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