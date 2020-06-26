import React from 'react';

import './WeatherInfo.css'


const WeatherInfo = (props) =>{

    const {temp , humidity, desc, city} = props.data;
    return(
        <React.Fragment>
             <h3>{desc}</h3> 
           <section>
           <div className="header-description">
                <h4>City</h4>
                <p>{city}</p>
            </div>
            <div className="header-description">
                <h4>Temperature</h4>
                <p>{temp}<span className="degree-symbol"></span>F</p>
            </div>
           <div className="header-description">
                <h4>Humnidity</h4>
                <p>{humidity}%</p>
           </div>
            
           </section>
        
            
        
        </React.Fragment>
    );
}

export default WeatherInfo;
