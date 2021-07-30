const axios = require('axios')
const Clinic = require('../models/clinic')
const utilityFunctions = require('../utils/utility-functions')

const getDentalClinics = async function (dentalClinicsMapper, appCache) {
    var clinics = []
    // check and get the list of Dental clinics from Cache if they are exit
    const dentalClinics = appCache.get('dental-clinics')
    if (dentalClinics !== undefined) {
        utilityFunctions.filterDentalClinicsBySearchKeyword(dentalClinics, dentalClinicsMapper, clinics, appCache)
    } else {
        // dental clinics are not exist in cache, Calling the Dental Clinics Service and set response in Cache
        await axios.get(process.env.DENTAL_CLINICS_URL)
            .then(response => {
                appCache.set('dental-clinics', response.data, process.env.TTL_DENTAL_CLINICS_SERVICE_RESPONSE)
                utilityFunctions.filterDentalClinicsBySearchKeyword(response.data, dentalClinicsMapper, clinics, appCache)
            })
    }

    return clinics
}

module.exports = getDentalClinics