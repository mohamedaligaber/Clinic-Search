const dentalClinicsAdapter = require('../adapters/dental-clinics-adapter')
const vetClinicsAdapter = require('../adapters/vet-clinics-adapter')
const DentalClinicsMapper = require('../mappers/dental-clinic-mapper')
const VetClinicsMapper = require('../mappers/vet-clinic-mapper')
const ClinicError = require('../clinics-errors')
const utilityFunctions = require('../utils/utility-functions')


const clinicsService = async function (request, appCache) {
    //validate availability values
    if (request.availabilityFrom !== undefined && utilityFunctions.isAvailabilityNotValid(request.availabilityFrom))  {
        throw new ClinicError.AvailabilityError('Availability From should be in correct "HH:MM" format')
    }
    
    if (request.availabilityTo !== undefined && utilityFunctions.isAvailabilityNotValid(request.availabilityTo)) {
        throw new ClinicError.AvailabilityError('Availability From should be in correct "HH:MM" format')
    }

    var clinics = []
    // Handle the state Name and State Code variable with Help of Cache
    var stateName
    var stateCode

    // check the request containg state code ,state name or non of them
    if (request.state === undefined);
    else if (appCache.get(request.state.toLowerCase()) === undefined && appCache.get(request.state.toUpperCase()) === undefined) {
        throw new ClinicError.StateError('value sent is not an USA State Code or State Name')
    } 
    else if (request.state.length === 2) {
        stateName = appCache.get(request.state.toUpperCase())
        stateCode = request.state.toUpperCase()
    }
    else {
        stateName = request.state.toLowerCase()
        stateCode = appCache.get(stateName.toLowerCase())
    }

    //Create Dental and Vet Appropiate Object mappers and pass them to Adapters
    var dentalClinicsMapper = new DentalClinicsMapper(request.clinicName, stateName, request.availabilityFrom, request.availabilityTo)
    var vetClinicsMapper = new VetClinicsMapper(request.clinicName, stateCode, request.availabilityFrom, request.availabilityTo)

    await dentalClinicsAdapter(dentalClinicsMapper, appCache).then((dentalClinics) => {
        dentalClinics.forEach((dentalClinic) => {
            clinics.push(dentalClinic)
        })
    }).catch((error) => {
        throw new ClinicError.FetchHClinicsError('General while fetching Dental Clinics')
    })

    await vetClinicsAdapter(vetClinicsMapper, appCache).then((vetClinics) => {
        vetClinics.forEach((vetClinic) => {
            clinics.push(vetClinic)
        })
    }).catch((error) => {
        throw new ClinicError.FetchHClinicsError('General while fetching Vet Clinics')
    })

    return clinics
}

module.exports = clinicsService