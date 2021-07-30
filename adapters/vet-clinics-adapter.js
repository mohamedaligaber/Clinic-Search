const axios = require('axios')
const Clinic = require('../models/clinic')
const utilityFunctions = require('../utils/utility-functions')

const getVetClinics = async function (vetClinicsMapper, appCache) {
    var clinics = []
    // check and get the list of Vet clinics from Cache if they are exit
    const vetClinics = appCache.get('vet-clinics')
    if (vetClinics !== undefined) {
        utilityFunctions.filterVetClinicsBySearchKeyword(vetClinics, vetClinicsMapper, clinics, appCache)
    } else {
        // vet clinics are not exist in cache, Calling the Vet Clinics Service and set response in Cache
        await axios.get(process.env.VET_CLINICS_URL)
            .then(response => {
                appCache.set('vet-clinics', response.data, process.env.TTL_VET_CLINICS_SERVICE_RESPONSE)
                utilityFunctions.filterVetClinicsBySearchKeyword(response.data, vetClinicsMapper, clinics, appCache)
            })
    }
    
    return clinics
}

module.exports = getVetClinics