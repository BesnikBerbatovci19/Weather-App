import React , { useState } from 'react';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import './WeatherContainer.css'

const WeatherContainer = () =>{
    const API_KEY = '283c44b0ad1d7b478fabdfac5a65f393';
    const [searchQeuery, setSearchQuery ] = useState();
    const [weatherData, setWeatherData] = useState({
        temp: null,
        humidity: null,
        desc: null,
        city: null,
    });
    const [ isValidZipCode, setIsValidZipCode] = useState(true);

    function updateSearchQeuery(event){
        let ZipCode = event.target.value;
        let isValid = validateZipCode(ZipCode);
        setSearchQuery(ZipCode);
        if(isValid || ZipCode === '' || isValid.length === 5){
            setIsValidZipCode(true)
        }else{
            
            setIsValidZipCode(false)
        }
       
    }

    function validateZipCode(zipCode){
        let regex = /[0-9]{5}/;
        return regex.test(zipCode);
    }

    function getWatherData(){
        if(!isValidZipCode || searchQeuery === ''){
            setIsValidZipCode(false)
            return;
        }
            fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${searchQeuery},us&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => setWeatherData({
                temp: convertToFarenhieit(data.main.temp),
                humidity: data.main.humidity,
                desc: data.weather[0].main,
                city: data.name,
             })) 
        }
    function convertToFarenhieit(temp){
        return ((temp - 273.15) * (9.0 / 5.0) + 32).toFixed(0);
    }

    return(
             <section className="weather-continer">
                        <header className="weather-header">
                            <h3>Weather</h3>
                            <div>
                                <input 
                                placeholder="Zip Code"
                                className="search-input"
                                onChange={updateSearchQeuery}
                                maxLength="5"
                                />
                                <button onClick={getWatherData} className="material-icons"><i className="fas fa-search"></i></button>
                            </div>
                        
                        </header>
        <p className="error">{isValidZipCode? '' : 'Invalid Zip Code'}</p>
                        <section className="weather-info">
                                {weatherData.temp === null ?(
                                    <p>No weather to  Display  <i className="far fa-sun"></i></p>
                                   
                                ): <WeatherInfo data = {weatherData} />
                                }
                        </section>
             </section>   
        );
}

export default WeatherContainer;