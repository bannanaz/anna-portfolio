
import styled from 'styled-components';


const StyledDiv = styled.div`
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
margin-bottom: 80px;

    h2 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 30px;
    }

    p{
        text-align: center;
    }
`;

const StyledDivFlex = styled.div`
display: flex;
flex-wrap: wrap;
Justify-content: space-between;
margin-top: 25px;

    img {
        margin-top: 25px; 
        margin-bottom: 10px;
        max-width: 580px;
        flex-shrink: 1;
        border: solid 15px #F4F9F7;
    }
`;

const StyledDivFlex2 = styled.div`
    display: flex; 
    flex-wrap-nowrap; 
    justify-content: space-between;
    align-items: center;

    div:last-of-type {
        display: flex; 

        p:nth-of-type(1) {
        font-size: 28px;
        margin-right: 15px;
        color: rgb(24,147,206);
        
        }

        p:nth-of-type(2) {
            font-size: 28px;
            margin-right: 15px;
            color: rgb(250,104,18);
        }

        p:nth-of-type(3) {
            font-size: 28px;
            margin-right: 0px;
            color: rgb(227,206,61);
            padding-bottom: 5px;
        }
    }
`;








const WorkSmall = (props) => {
    return (
        <StyledDiv>
            <h2>SMALLER PROJECTS</h2>
            <p>Leearning the craft of code, Lorem ... </p>
            <StyledDivFlex>
                {props.data.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} />
                        <StyledDivFlex2>
                            <div>
                                <h3>{item.title}</h3>
                                <p>View code at: <a href={item.github} target="_blank">GitHub</a></p>
                            </div>
                            <div>
                                <p>{item.html5}</p>
                                <p>{item.css}</p>
                                <p>{item.js}</p>
                            </div>
                        </StyledDivFlex2>
                    </div>
                ))}
            </StyledDivFlex>
        </StyledDiv>
    );
}
export default WorkSmall;