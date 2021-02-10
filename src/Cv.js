import styled from 'styled-components';

const StyledDiv = styled.div`

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        text-align: center;
    }
    p:first-of-type {
        font-weight: bolder;
    }
`;

const Cv = (props) => {
    return (
        <StyledDiv>
            {props.dataCv.map((item) => (
                <div key={item.id}>
                    <p>{item.role}</p>
                    <p>{item.period}</p>
                    <br></br>
                </div>
            ))}
        </StyledDiv>
    );
}
export default Cv;