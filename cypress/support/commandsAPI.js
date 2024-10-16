Cypress.Commands.add('retrieveCurrentWeather', (data) => {
    cy.request({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${data}`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'London');
        expect(response.body).to.have.property('main');
    });
});

Cypress.Commands.add('retrieveInvalidCityName', (data) => {
    cy.request({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?q=NonExistingCity&appid=${data}`,
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property('message', 'city not found');
    });
});


Cypress.Commands.add('retrieveCurrentWeathVithoutAPIkey', () => {
    cy.request({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London',
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property('message').and.include('Invalid API key');
    });
});