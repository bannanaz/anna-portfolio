
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 85%;
margin-left: auto;
margin-right: auto;
margin-top: 80px;
`;

const StyledDivFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: top;
margin-top: 40px;
margin-bottom: 40px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: left;
    width: 90%;
}

    img {
        max-width: 900px;
        min-width: 500px;
        flex-shrink: 1;
        border: solid 15px #F4F9F7;
        margin-left: 15px;
            @media screen and (max-width: 900px) {
            margin-left: 0px;
            min-width: 100px;
        }
    }
`;

const StyledDivText = styled.div`
min-width: 280px;
flex-shrink: 2;
margin-right: 15px;

    h2 {
        margin-bottom: 10px;
        padding-top: 80px;

         @media screen and (max-width: 900px) {
            padding-top: 40px;
        }
    }

    p{
        font-size: 16px;
         @media screen and (max-width: 1100px) {
            font-size: 14px;
        }
         @media screen and (max-width: 900px) {
            font-size: 16px;
        }
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color: black;
        font-size: 18px;

        &:hover{
        cursor: pointer;
        color: lightgray;
    }
}`;

const StyledDivIcon = styled.div`
display: flex; 
justify-content: left;
flex-wrap: nowrap;
align-items: baseline;
margin-top: 10px;


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
        margin-right: 15px;
        color: rgb(227,206,61);
        padding-bottom: 5px;
    }
`;


const WorkLarge = (props) => {
    return (
        <StyledDiv>
            {props.data.map((item) => (
                <StyledDivFlex key={item.id}>
                    <StyledDivText>
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        <br></br>
                        <p>View code at: <a href={item.github} target="_blank">GitHub</a></p>
                        <StyledDivIcon>
                            <p>{item.html5}</p>
                            <p>{item.css}</p>
                            <p>{item.js}</p>
                        </StyledDivIcon>
                    </StyledDivText>
                    <img src={item.image} />
                </StyledDivFlex>
            ))}
        </StyledDiv>
    );
}
export default WorkLarge;