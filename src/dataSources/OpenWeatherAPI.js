const { RESTDataSource } = require('apollo-datasource-rest');
const headers = require('../utils/headers');

class OpenWeatherAPI extends RESTDataSource {
  constructor() {
    super();
    /**
     * @description can implements the rest service here
     * read more about in https://www.apollographql.com/docs/apollo-server/data/data-sources/
     */
    this.baseURL = 'https://api.openweathermap.org/data/2.5/';
  }

  willSendRequest(request) {
    request.params.set('appid', process.env.OPEN_WEATHER_API_KEY);

    const acceptLanguage = headers.acceptLanguage(this.context.headers);
    request.params.set('lang', acceptLanguage);
  }

  async getWeather({ lat, lon }) {
    const encondedLat = `${encodeURIComponent(lat)}`;
    const encondedLon = `${encodeURIComponent(lon)}`;

    try {
      const result = await this.get(`weather?lat=${encondedLat}&lon=${encondedLon}`);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = OpenWeatherAPI;
