import React from 'react';
import './App.css';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';



class App extends React.Component {

  render(){
   
  return (
    
    <section className="app-container ">
          <WeatherContainer />
    </section>
  );
}
}

export default App;
