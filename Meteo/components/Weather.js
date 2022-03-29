import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Prototypes from "prop-types";
import { WeatherConditions } from "../../utilities/WeatherCondition";

const Weather = ({ weather, temperature }) => {
  return (
    <View
      style={
        (styles.weatherContainer,
        { backgroundColor: WeatherConditions[weather].color })
      }
    >
      <View style={styles.headerContainer}>
        <Text style={styles.tempText}>{temperature}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{WeatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {WeatherConditions[weather].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.prototype = {
  temperature: Prototypes,
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tempText: {
    fontSize: 72,
    color: "#fff",
  },
  bodyContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 60,
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
  },
});
export default Weather;
