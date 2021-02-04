
import styled from 'styled-components';


const StyledDivFrame = styled.div`
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 60px;
margin-bottom: 60px;

    h2 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 30px;
    }

    p{
        text-align: center;
    }

    > div {
        display: flex; 
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (max-width: 900px) {
            justify-content: center;
        }
    }
`;

const StyledDivFlex = styled.div`
margin-top: 25px;
align-items: baseline; 
width: 48%;
margin-left: auto;
margin-right: auto;
@media screen and (max-width: 900px) {
    width: 100%;
  
}

    img {
        box-sizing: border-box;
        margin-bottom: 7px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border: solid 15px #F4F9F7;
      
`;

const StyledDivFlex2 = styled.div`
    width: 100%;
    display: flex; 
    flex-wrap: nowrap; 
    justify-content: space-between;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;     

    div:first-of-type {

        a {
            text-decoration: none;
            color: black;
            font-size: 16px;
            margin-top: 3px;
    

            &:hover{
                cursor: pointer;
                color: lightgray;
                }
        }
    }

    div:last-of-type {
        display: flex;
        justify-content: right;
        align-items: top; 


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
        <StyledDivFrame>
        <h2>SMALLER PROJECTS</h2>
        <p>Leearning the craft of code, Lorem ... </p>
            <div>
                {props.data.map((item) => (
                    <StyledDivFlex key={item.id}>
                        <img src={item.image} />
                        <StyledDivFlex2>
                            <div>
                                <h3>{item.title}</h3>
                                <a href={item.github} target="_blank">View code at GitHub</a>
                            </div>
                            <div>
                                <p>{item.html5}</p>
                                <p>{item.css}</p>
                                <p>{item.js}</p>
                            </div>
                        </StyledDivFlex2>
                    </StyledDivFlex>
                ))}
            </div>
        </StyledDivFrame>
    );
}
export default WorkSmall;