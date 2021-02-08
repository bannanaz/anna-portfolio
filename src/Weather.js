import React, { useEffect, useState } from 'react';
const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=4a7f93ba709b9f6af319b9065bd8f12e&units=metric"

function Weather() {
    const [data, setData] = useState({ data: null });
    console.log(data);

    useEffect(() => {
        console.log("Hej från useEffect");
        fetch(url)
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    return (
        <span>Weather! {!data.data ? '?' : data.data.main.temp.toFixed(1)} </span>
    )
}

export default Weather;