import styled from 'styled-components';

const StyledDivBackgr = styled.div`
width: 100%;
background-color: F4F9F7;
`;

const StyledDivFlexContainer = styled.div`
display: flex;
justify-content: left;
width: 85%;
background-color: F4F9F7;

`;


function Footer() {
    return (
        <StyledDivBackgr>
        <StyledDivFlexContainer>
          <div>
            <h2>SOCIAL</h2>
            <p></p>
            <p></p>
          </div>
          <div>
          <h2>CONTACT</h2>
            <p></p>
            <p></p>
          </div>
          <div>
          <p>COPYRIGHT ANNA PETTERSSON</p>
          </div>
        </StyledDivFlexContainer>
        </StyledDivBackgr>
    );
}

export default Footer;