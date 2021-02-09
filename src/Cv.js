import styled from 'styled-components';

const StyledDiv = styled.div`
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
                    <p>{item.employer}</p>
                    <p>{item.period}</p>
                    <br></br>
                </div>
            ))}
        </StyledDiv>
    );
}
export default Cv;