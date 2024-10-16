describe('OpenWeatherMap API Testing', () => {

  const apiKey = '3dbe7de0d90c2c14c19b34c1ec7fadf1';

  it('Should retrieve current weather data for London', () => {
    cy.retrieveCurrentWeather(apiKey);
  });

  it('Should handle invalid city name', () => {
    cy.retrieveInvalidCityName(apiKey);
  });

  it('Should return unauthorized error without API key', () => {
    cy.retrieveCurrentWeathVithoutAPIkey();
  });
});
