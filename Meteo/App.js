import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./components/Weather";
import { API_KEY } from "../utilities/WeatherAPIKeys";

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 26,
    weatherCondition: "Clear",
    error: null,
  };

  componnentDidMount() {}
  getWeather(lat = 26, lon = 26) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        // this.setState({
        //   temperature:json.main.temp
      });
  }

  render() {
    const { temperature, weatherCondition, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Getting Weather Data</Text>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
