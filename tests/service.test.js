const clinicsService = require('../services/clinics-service')
const NodeCache = require( "node-cache" )
const appCache = new NodeCache()
const utilityFunctions = require('../utils/utility-functions')
utilityFunctions.setUSAStatesCodesAndNamesInCache(appCache)


test('Should return error message that the or availability from not in correct format', async () => {
    clinicsService({availabilityFrom: '26:90'}, appCache).then(() => {
        expect().toThrow('Availability From should be in correct "HH:MM" format')
    }).catch(() => {})
})

test('Should return error message that the or availability to not in correct format', async () => {
    clinicsService({availabilityTo: '20:62'}, appCache).then(() => {
        expect().toThrow('Availability To should be in correct "HH:MM" format')
    }).catch(() => {})
})


test('Should return error message that the state name or code not exist', async () => {
    clinicsService({state: 'xy'}, appCache).then(() => {
        expect().toThrow('value sent is not an USA State Code or State Name')
    }).catch(() => {})
})

test('Should return error message that the state name or code not exist', async () => {
    clinicsService({state: 'wrongsatetname'}, appCache).then(() => {
        expect().toThrow('value sent is not an USA State Code or State Name')
    }).catch(() => {})
})

test('Should return error message that the state name or code not exist', async () => {
    clinicsService({state: 'FL'}, appCache).then(() => {
        expect().toThrow('General while fetching Vet Clinics')
    }).catch(() => {})
})
