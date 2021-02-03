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
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
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
  width: 250px;
  align-items: left;
     @media screen and (max-width: 500px) {
        align-items: center;
    }
}

 h3 {
    font-family: 'Permanent Marker', cursive;
    font-size: 20px;
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
align-content: top;
margin-bottom: 5 px;
flex: 1;

img {
  flex: 1;
  @media screen and (max-width: 500px) {
    transform: scale(1.9);
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
            <a href="mailto:anlepet@gmail.com">Mail: anlepet@gmail.com</a>
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