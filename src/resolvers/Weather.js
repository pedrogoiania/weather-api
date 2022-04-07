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
    temp: ({ main }) => main.temp,
    feelsLike: ({ main }) => main.feels_like,
    tempMin: ({ main }) => main.temp_min,
    tempMax: ({ main }) => main.temp_max,
    location: ({ name }) => name,
  },
};
