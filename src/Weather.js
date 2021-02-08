import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import weather from './img/weather.jpg';

const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=metric"
const IconURL = "http://openweathermap.org/img/wn/";

const StyledDiv = styled.div`
background-image: url(${weather}); 
background-repeat: no-repeat;
background-size: 100%;
width: 300px;
height: 300px;
border-radius: 50%;

h2 {
    color: white;
}

p {
    color: white;
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
            <h2>Stockholm weather: </h2>
            <p> {!data.data ? '?' : data.data.main.temp.toFixed(1)} °C</p>
            <img src={!data.data ? '?' : IconURL + data.data.weather[0].icon + ".png"} />
        </StyledDiv>
    )
}

export default Weather;