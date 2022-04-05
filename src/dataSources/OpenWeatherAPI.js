const { RESTDataSource } = require('apollo-datasource-rest');

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
    request.params.set('appid', 'b93314736b966308a6e97695cf8b75c3');
  }

  async getWeather({ lat, lon }) {
    const encondedLat = `${encodeURIComponent(lat)}`;
    const encondedLon = `${encodeURIComponent(lon)}`;

    console.log({
      encondedLat,
      encondedLon,
    });

    const result = await this.get(`weather?lat=${encondedLat}&lon=${encondedLon}`);

    if (result) {
      return result;
    }

    throw Error({
      err: 'objeto nao encontrado',
    });
  }
}

module.exports = OpenWeatherAPI;
