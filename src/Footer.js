import styled from 'styled-components';
import Weather from './Weather';

const StyledDivBackgr = styled.div`
  width: 100%;
  background-color: #F4F9F7;
  height: auto;

main {
  width: 85%;
  margin-left: auto; 
  margin-right: auto; 
  display: flex; 
  justify-content: space-between; 
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
      width: 90%;
  }
  @media screen and (max-width: 780px) {
      display: flex;
      flex-direction: column;
      align-content: center; 
      align-items: center;  
  }
}
`;

const StyledDivLeftSection = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 20px;
    padding-bottom: 30px;
    @media screen and (max-width: 780px) {
      display: flex;
      flex-direction: column; 
      align-content: center;
      text-align: center;
      padding-bottom: 0px;
    }

    div {
      display: flex; 
      flex-direction: column;
      width: 200px;
      align-items: left;
    }

    h2 {
      font-family: 'Permanent Marker', cursive;
      padding-top: 20px;
      padding-bottom: 5px;
    }

    a {
      font-size: 20px;
      text-decoration: none;
      line-height: 1.4;
      color: black;
      font-family: 'Open Sans', sans-serif;

    &:hover {
      cursor: pointer;
      color: lightgray;
      }
    }
`;

const StyledDivRightSection = styled.div`
  display: flex; 
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 30px;
  @media screen and (max-width: 780px) {
      padding-top: 0px;
  }

    h2 {
      font-family: 'Permanent Marker', cursive;
      padding-top: 15px;
      text-align: right;
      @media screen and (max-width: 780px) {
          text-align: center;
      }
    }
`;

const StyledDivCopy = styled.div`
  width: 95%;
  margin-left: auto; 
  margin-right: auto; 
  display: flex; 
  justify-content: center;

  p { 
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #97c2a8;
    padding-bottom: 10px; 
  }
`;

function Footer() {
  return (
    <StyledDivBackgr>
      <main>
        <StyledDivLeftSection>
          <div>
            <h2>PLATFORMS</h2>
            <a href="https://github.com/bannanaz" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/anpettersson/" target="_blank">Instagram</a>
          </div>
          <div>
            <h2>CONTACT</h2>
            <a href="mailto:anlepet@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/anlepet/" target="_blank">Linkedin</a>
          </div>
        </StyledDivLeftSection>
        <StyledDivRightSection>
          {/*<h2>STHLM WEATHER</h2>*/}
          <Weather />
          <h2>STOCKHOLM</h2>
          {/*<img src={bird_icon} alt="Birdie" />*/}
        </StyledDivRightSection>
      </main>
      <StyledDivCopy>
        <p>Copyright Anna Pettersson, 2021.</p>
      </StyledDivCopy>
    </StyledDivBackgr>
  );
}

export default Footer;