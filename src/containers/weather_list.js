import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component{
  renderWeather(cityWeather){
    if(cityWeather){
      const name = cityWeather.city.name;
      const {lat, lon} = cityWeather.city.coord;
      const temps = cityWeather.list.map(weather => weather.main.temp);
      const pressures = cityWeather.list.map(weather => weather.main.pressure);
      const humidities = cityWeather.list.map(weather => weather.main.humidity);
      console.log(cityWeather);

      return (
        <tr key={name}>
          <td><GoogleMap lat={lat} lng={lon} /></td>
          <td><Chart data={temps} color="red" units="K"/></td>
          <td><Chart data={pressures} color="orange" units="hPa"/></td>
          <td><Chart data={humidities} color="blue" units="%"/></td>
        </tr>);
    }
  }

  render(){
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temerature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);