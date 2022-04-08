module.exports = {
  Query: {
    getWeatherByGeoLocation: async (_, { coordinates }, { dataSources: { OpenWeatherAPI } }) => {
      const weather = await OpenWeatherAPI.getWeather(coordinates);
      return weather;
    },
  },
  Weather: {
    main: ({ weather }) => {
      const data = weather[0];
      return String(data.main).toLowerCase();
    },
    description: ({ weather }) => {
      const data = weather[0];
      return data.description;
    },
    icon: ({ weather }) => {
      const data = weather[0];
      const iconsEnum = {
        '01d': 'clearSky',
        '01n': 'clearSkyNight',
        '02d': 'fewClouds',
        '02n': 'fewCloudsNight',
        '03d': 'scatteredClouds',
        '03n': 'scatteredCloudsNight',
      };

      return iconsEnum[data.icon];
    },
    temp: ({ main }) => main.temp,
    feelsLike: ({ main }) => main.feels_like,
    tempMin: ({ main }) => main.temp_min,
    tempMax: ({ main }) => main.temp_max,
    location: ({ name }) => name,
  },
};
