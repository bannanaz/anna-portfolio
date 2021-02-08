import styled from 'styled-components';
import bird_icon from './img/bird_icon.svg';

const StyledDivBackgr = styled.div`
width: 100%;
background-color: #F4F9F7;
height: auto;

main {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
}
}
  `;

const StyledDivLeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 30px;

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
    padding-bottom: 5px;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    line-height: 1.4;
    color: black;

     &:hover {
      cursor: pointer;
      color: lightgray;
      }
  }
`;

const StyledDivRightSection = styled.div`
display: flex; 
flex-direction: column;
align-items: flex-end;
align-content: top;
margin-bottom: 5px;
flex: 1;

img {
  flex: 1;
  margin-bottom: 15px;
  transform: scale(1.9);
  @media screen and (max-width: 800px) {
    transform: scale(2);
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
      <main>
        <StyledDivLeftSection>
          <div>
            <h3>PLATFORMS</h3>
            <a href="https://github.com/bannanaz" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/anpettersson/" target="_blank">Instagram</a>
          </div>
          <div>
            <h3>CONTACT</h3>
            <a href="mailto:anlepet@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/anlepet/" target="_blank">Linkedin</a>
          </div>
        </StyledDivLeftSection>
        <StyledDivRightSection>
          <img src={bird_icon} alt="Birdie" />
          <p>COPYRIGHT ANNA PETTERSSON</p>
        </StyledDivRightSection>
      </main>
    </StyledDivBackgr>
  );
}

export default Footer;