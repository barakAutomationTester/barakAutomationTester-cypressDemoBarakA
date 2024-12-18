/// <reference types= 'Cypress' />

const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
const cityName = "Kfar Saba, IL"
const units = "metric"
const apiKey = "d9a242910c8feb8aa3df3cc7eb1fb7f5"
const hebrewLang = "he"


describe ('Weather site api testing', function() {
    it ('GET request testing', function() {
        cy.request({
            method: "GET",
            url: apiUrl,
            qs: {
                appid: apiKey,
                q: cityName,
                units: units
            }    
            
        }).then((response) => {
            const weatherData = response.body
            cy.log(JSON.stringify(weatherData,null,2))

            const country = weatherData.sys.country
            const humidity = weatherData.main.humidity
            const temp = weatherData.main.temp
            const city = weatherData.name
            cy.log(`the country is ${country},city is ${city}, temperature is ${temp}, humidity is ${humidity}`)

            cy.visit('https://openweathermap.org/')
            cy.get('input[name="q"]').first().type(`${city}{enter}`, {force: true})
            cy.get('#forecast_list_ul td:nth-child(2) a').first().should('contain.text', 'Kfar Saba').click()
            cy.get('.current-container h2').should('contain.text', country).and('contain.text', city)
            // cy.get('.weather-items li:nth-child(3)').should('contain.text', humidity)

        })

    })
})