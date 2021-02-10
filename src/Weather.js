import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=metric"
const IconURL = "http://openweathermap.org/img/wn/";

const StyledDiv = styled.div`
width: 200px; 
height: 50px; 
position: relative;
margin-top: 15px;

    p {
        font-size: 20px;
        font-family: 'Open Sans', sans-serif;
        color: black;
        pading: 0px; 
        margin: 0px; 
        position: absolute; 
        top: 15px;
        left: 122px;
         
        @media screen and (max-width: 780px) {
            top: 25px;
            left: 100px;
            font-size: 20px;
            font-weight: normal;
        }
      }

    img {
        position: absolute;
        top: -25px;
        left: 38px; 

            @media screen and (max-width: 780px) {
                top: -15px;
                left: 10px;
            }
    }
`;

function Weather() {
    const [data, setData] = useState({ data: null });
    console.log(data);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    return (
        <StyledDiv>
            <img src={!data.data ? '?' : IconURL + data.data.weather[0].icon + "@2x.png"} alt="Illustrates current weather in Stockholm" />
            <p> {!data.data ? '?' : data.data.main.temp.toFixed(1)} °C</p>
        </StyledDiv>
    )
}

export default Weather;