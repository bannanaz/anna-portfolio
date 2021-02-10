
import styled from 'styled-components';

const StyledDiv1 = styled.div`
    width: 85%;
    margin-left: auto; 
    margin-right: auto;
    margin-top: 70px;
    @media screen and(max-width: 1200px) {
        width: 90%;
    }
    @media screen and(max - width: 700px) {
        margin-top: 40px;
    }
`;

const StyledDiv2 = styled.div`
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: top;
    margin-top: 40px;
    margin-bottom: 40px;
    @media screen and (max-width: 700px) {
        margin-top: 20px;
        margin-bottom: 30px;
    }
`;

const StyledDivText = styled.div`
    width: 38%;
    @media screen and (max-width: 900px) {
        width: 85%;
        margin-left: 15px;
    }

    h2 {
        margin-bottom: 10px;
        padding-top: 80px;
        @media screen and (max-width: 1000px) {
            padding-top: 25px;
        }
        @media screen and (max-width: 700px) {
            padding-top: 20px;
        }
    }

    p {
        font-size: 18px;
        @media screen and (max-width: 1200px) {
            font-size: 16px;
        }
        @media screen and (max-width: 900px) {
            font-size: 18px;
        }
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 18px;
        
        &:hover {
            cursor: pointer;
            color: lightgray;
        }
    }
`;

const StyledDivIcon = styled.div`
    display: flex; 
    justify-content: flex-start;
    align-items: baseline;
    flex-wrap: nowrap;
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

const StyledImg = styled.img`
    box-sizing: border-box;
    width: 58%;
    height: 100%;
    min-width: 0%;
    border: solid 15px #F4F9F7;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: 100%;   
        min-width: 0%;
        }

    @media screen and (max-width: 600px) {
        border: solid 10px #F4F9F7;
    }

`;


const WorkLarge = (props) => {
    return (
        <StyledDiv1>
            {props.data.map((item) => (
                <div key={item.id}>
                    <StyledDiv2>
                        <StyledDivText>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <br></br>
                            <a href={item.github} target="_blank">View code at GitHub</a>
                            <StyledDivIcon>
                                <p>{item.html5}</p>
                                <p>{item.css}</p>
                                <p>{item.js}</p>
                            </StyledDivIcon>
                        </StyledDivText>
                        <StyledImg src={item.image} alt="Example of larger project" />
                    </StyledDiv2>
                </div>
            ))}
        </StyledDiv1>
    );
}

export default WorkLarge;