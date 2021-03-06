
import styled from 'styled-components';


const StyledDivFrame = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    margin-bottom: 60px;

    @media screen and (max-width: 1200px) {
        width: 90%;
    } 
    @media screen and (max-width: 700px) {
        margin-top: 40px;
        margin-bottom: 30px;
    } 
    @media screen and(max - width: 400px) {
        width: 95%;
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

const StyledDiv = styled.div`
display: flex; 
flex-direction: column; 

  h2 {
        font-family: 'Permanent Marker', cursive;
        text-align: center;
        font-size: 30px;
        margin-bottom: 5px;
    }

    p {
        text-align: center;
        font-size: 20px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;

        @media screen and (max-width: 1200px) {
            font-size: 18px;      
        }
        @media screen and (max-width: 900px) {
            width: 85%;
            margin-left: auto;
            margin-right: auto;
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
    @media screen and (max-width: 700px) {
        margin-top: 10px;
    }

    img {
        box-sizing: border-box;
        margin-bottom: 7px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        border: solid 15px #F4F9F7;

        @media screen and (max-width: 600px) {
            border: solid 10px #F4F9F7;
        }   
    }        
`;

const StyledDivFlex2 = styled.div`
    width: 100%;
    display: flex; 
    flex-wrap: nowrap; 
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 25px;
    margin-left: auto;
    margin-right: auto;     

    div:first-of-type {
        margin-left: 5px;

        h2 {
            font-size: 22px;
            
            @media screen and (max-width: 900px) {
                font-size: 1.5em;
                font-weight: bolder;
            }
        }

        a {
            text-decoration: none;
            color: black;
            font-size: 18px;
            margin-top: 5px;

            &:hover {
                cursor: pointer;
                color: lightgray;
            }
        }
    }

    div:last-of-type {
        display: flex;
        justify-content: right;
        align-items: top; 
        margin-right: 5px;

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
            <StyledDiv>
                <h2>SMALLER PROJECTS</h2>
                <p>Learning the craft of coding is a fun and mind changing experience. These are my steps along the way.  </p>
            </StyledDiv>
            <div>
                {props.data.map((item) => (
                    <StyledDivFlex key={item.id}>
                        <img src={item.image} alt="Example of smaller project" />
                        <StyledDivFlex2>
                            <div>
                                <h2>{item.title}</h2>
                                <a href={item.github}>View code at GitHub</a>
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