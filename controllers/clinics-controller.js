const clinicsService = require('../services/clinics-service')

module.exports = function (app, appCache) {

    app.get('/v1/clinics', (request, response) => {
        clinicsService(request.query, appCache).then((clinics) => {
            response.header('Content-type', 'application/json')
            .status(200)
            response.send({ 'data': clinics })
        }).catch((error) => {
            response.header('Content-type', 'application/json')
            response.status(400).send({ 'errorMessage': error.message, 'errorName': error.name })
        })
    })
}