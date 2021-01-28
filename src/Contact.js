import styled from 'styled-components';
import bgcontact from './img/bgcontact.jpg';
import { useState } from 'react';

const StyledDivBackgr = styled.div`
width: 100%;
margin: auto;
background-image: url(${bgcontact});
background-size: cover;
background-repeat: no-repeat;

    form {
    width: 85%;
    margin: auto;    
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 60px;
    }

    h2 {
        font-family: 'Permanent Marker', cursive;
        color: white;
        font-size: 50px;
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }

    input[type=email] {
        width: 450px;
        height: 50px;
        margin: 10px;
        border-radius: 10px;
        padding: 0px 10px;
        @media screen and (max-width: 600px) {
            width: 85%;
        }
    }

    input[type=textarea] {
        flex: 1 1 200px;
        width: 450px;
        margin: 20px;
        border-radius: 10px;
        padding: 0px 10px;
        @media screen and (max-width: 600px) {
            width: 85%;
        }
    }

     button {
        margin-top: 20px;
        width: 180px;
        height: 60px;
        border-radius: 10px;
        font-family: 'Permanent Marker', cursive;
        font-size: 26px;
        color: white;
        background-color: #FD8A49;
        border: none;
        @media screen and (max-width: 500px) {
            font-size: 22px;
            width: 160px;
            height: 50px;
        }
    }
}
`; 


const Contact = () => {
  const [status, setStatus] = useState("Submit");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const { email, message } = e.target.elements;
    let details = {
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);

  };

  return (
    <StyledDivBackgr>
            <form onSubmit={handleSubmit}>
                <h2>SAY HELLO!</h2>
                <input type="email" id="email" placeholder="Your e-mail" required ></input>
                <input type="textarea" id="message" placeholder="Write something to Anna" required></input>
                <button type="submit">{status}</button>
            </form>
    </StyledDivBackgr> 
  );
};

export default Contact;

