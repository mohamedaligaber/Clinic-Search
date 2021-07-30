const utilityFunctions = require('../utils/utility-functions')
const NodeCache = require( "node-cache" )
const appCache = new NodeCache()
utilityFunctions.setUSAStatesCodesAndNamesInCache(appCache)
testUtilities = require('./test-utilities')

test('Should return empty dental clinics array', () => {
    expect(utilityFunctions.filterDentalClinicsBySearchKeyword(testUtilities.dentalClinics, testUtilities.dentalClinicsMappers[1], [], appCache))
    .toStrictEqual([])
})

test('Should return dental clinics array with length equal 1', () => {
    expect(utilityFunctions.filterDentalClinicsBySearchKeyword(testUtilities.dentalClinics, testUtilities.dentalClinicsMappers[0], [], appCache).length)
    .toEqual(1)
})

test('Should return empty vet clinics array', () => {
    expect(utilityFunctions.filterVetClinicsBySearchKeyword(testUtilities.vetClinics, testUtilities.vetClinicsMappers[1], [], appCache))
    .toStrictEqual([])
})

test('Should return vet clinics array with length equal 1',  () => {
    expect(utilityFunctions.filterVetClinicsBySearchKeyword(testUtilities.vetClinics, testUtilities.vetClinicsMappers[0], [], appCache).length)
    .toEqual(1)
})


test('Should return false cause availability is valid',  () => {
    expect(utilityFunctions.isAvailabilityNotValid('12:51'))
    .toBe(false)
})

test('Should return true cause availability is not valid',  () => {
    expect(utilityFunctions.isAvailabilityNotValid('52:95'))
    .toBe(true)
})