const Clinic = require('../models/clinic')

const filterDentalClinicsBySearchKeyword =  function (dentalClinics, dentalClinicsMapper, clinics, appCache) {
    dentalClinics.forEach(dentalClinicObj => {
        if ((dentalClinicsMapper.name === undefined || dentalClinicObj.name.includes(dentalClinicsMapper.name)) &&
            (dentalClinicsMapper.stateName === undefined ||  dentalClinicsMapper.stateName.toLowerCase() === dentalClinicObj.stateName.toLowerCase()) &&
            (dentalClinicsMapper.availabilityFrom === undefined || (dentalClinicsMapper.availabilityFrom >= dentalClinicObj.availability.from && dentalClinicsMapper.availabilityFrom < dentalClinicObj.availability.to)) &&
            (dentalClinicsMapper.availabilityTo === undefined  || (dentalClinicsMapper.availabilityTo > dentalClinicObj.availability.from && dentalClinicsMapper.availabilityTo <= dentalClinicObj.availability.to))) {
                clinics.push(new Clinic(dentalClinicObj.name, dentalClinicObj.stateName, appCache.get(dentalClinicObj.stateName.toLowerCase()), dentalClinicObj.availability.from, dentalClinicObj.availability.to))
        }
    })
    return clinics
}

const filterVetClinicsBySearchKeyword =  function (vetClinics, vetClinicsMapper, clinics, appCache) {
    vetClinics.forEach(vetClinicObj => {
        if ((vetClinicsMapper.clinicName === undefined || vetClinicObj.clinicName.includes(vetClinicsMapper.clinicName )) &&
            (vetClinicsMapper.stateCode === undefined ||  vetClinicsMapper.stateCode.toUpperCase() === vetClinicObj.stateCode.toUpperCase()) &&
            (vetClinicsMapper.openingFrom === undefined || (vetClinicsMapper.openingFrom >= vetClinicObj.opening.from && vetClinicsMapper.openingFrom < vetClinicObj.opening.to)) &&
            (vetClinicsMapper.openingTo === undefined  || (vetClinicsMapper.openingTo > vetClinicObj.opening.from && vetClinicsMapper.openingTo <= vetClinicObj.opening.to))) {
                clinics.push(new Clinic(vetClinicObj.clinicName, appCache.get(vetClinicObj.stateCode.toUpperCase()), vetClinicObj.stateCode, vetClinicObj.opening.from, vetClinicObj.opening.to))
        }
    })
    return clinics
}

const isAvailabilityNotValid = function (availability) {
    isvalid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?/.test(availability)
    if (!isvalid) {
        return true
    } else {
        return false
    }
}
//Set all United state codes and names into the Cache to retrive them by Code or Name based on the value send in the Search criteria
const setUSAStatesCodesAndNamesInCache = function (appCache) {
    appCache.mset([
        {key: 'AA', val: 'armed forces america'},
        {key: 'AE', val: 'armed forces'},
        {key: 'AK', val: 'alaska'},
        {key: 'AL', val: 'alabama'},
        {key: 'AP', val: 'armed forces pacific'},
        {key: 'AR', val: 'arkansas'},
        {key: 'AZ', val: 'arizona'},
        {key: 'CA', val: 'california'},
        {key: 'CO', val: 'colorado'},
        {key: 'CT', val: 'connecticut'},
        {key: 'DC', val: 'washington dc'},
        {key: 'DE', val: 'delaware'},
        {key: 'FL', val: 'florida'},
        {key: 'GA', val: 'georgia'},
        {key: 'GU', val: 'guam'},
        {key: 'HI', val: 'hawaii'},
        {key: 'IA', val: 'iowa'},
        {key: 'ID', val: 'idaho'},
        {key: 'IL', val: 'illinois'},
        {key: 'IN', val: 'indiana'},
        {key: 'KS', val: 'kansas'},
        {key: 'KY', val: 'kentucky'},
        {key: 'LA', val: 'louisiana'},
        {key: 'MA', val: 'massachusetts'},
        {key: 'MD', val: 'maryland'},
        {key: 'ME', val: 'maine'},
        {key: 'MI', val: 'michigan'},
        {key: 'MN', val: 'minnesota'},
        {key: 'MO', val: 'missouri'},
        {key: 'MS', val: 'mississippi'},
        {key: 'MT', val: 'montana'},
        {key: 'NC', val: 'north carolina'},
        {key: 'ND', val: 'north dakota'},
        {key: 'NE', val: 'nebraska'},
        {key: 'NH', val: 'new hampshire'},
        {key: 'NJ', val: 'new jersey'},
        {key: 'NM', val: 'new mexico'},
        {key: 'NV', val: 'nevada'},
        {key: 'NY', val: 'new york'},
        {key: 'OH', val: 'ohio'},
        {key: 'OK', val: 'oklahoma'},
        {key: 'OR', val: 'oregon'},
        {key: 'PA', val: 'pennsylvania'},
        {key: 'PR', val: 'puerto rico'},
        {key: 'RI', val: 'rhode island'},
        {key: 'SC', val: 'south carolina'},
        {key: 'SD', val: 'south dakota'},
        {key: 'TN', val: 'tennessee'},
        {key: 'TX', val: 'texas'},
        {key: 'UT', val: 'utah'},
        {key: 'VA', val: 'virginia'},
        {key: 'VI', val: 'virgin islands'},
        {key: 'VT', val: 'vermont'},
        {key: 'WA', val: 'washington'},
        {key: 'WI', val: 'wisconsin'},
        {key: 'WV', val: 'west virginia'},
        {key: 'WY', val: 'wyoming'},

        {key: 'armed forces america', val: 'AA'},
        {key: 'armed forces', val: 'AE'},
        {key: 'alaska', val: 'AK'},
        {key: 'alabama', val: 'AL'},
        {key: 'armed forces pacific', val: 'AP'},
        {key: 'arkansas', val: 'AR'},
        {key: 'arizona', val: 'AZ'},
        {key: 'california', val: 'CA'},
        {key: 'colorado', val: 'CO'},
        {key: 'connecticut', val: 'CT'},
        {key: 'washington dc', val: 'DC'},
        {key: 'delaware', val: 'DE'},
        {key: 'florida', val: 'FL'},
        {key: 'georgia', val: 'GA'},
        {key: 'guam', val: 'GU'},
        {key: 'hawaii', val: 'HI'},
        {key: 'iowa', val: 'IA'},
        {key: 'idaho', val: 'ID'},
        {key: 'illinois', val: 'IL'},
        {key: 'indiana', val: 'IN'},
        {key: 'kansas', val: 'KS'},
        {key: 'kentucky', val: 'KY'},
        {key: 'louisiana', val: 'LA'},
        {key: 'massachusetts', val: 'MA'},
        {key: 'maryland', val: 'MD'},
        {key: 'maine', val: 'ME'},
        {key: 'michigan', val: 'MI'},
        {key: 'minnesota', val: 'MN'},
        {key: 'missouri', val: 'MO'},
        {key: 'mississippi', val: 'MS'},
        {key: 'montana', val: 'MT'},
        {key: 'north carolina', val: 'NC'},
        {key: 'north dakota', val: 'ND'},
        {key: 'nebraska', val: 'NE'},
        {key: 'new hampshire', val: 'NH'},
        {key: 'new jersey', val: 'NJ'},
        {key: 'new mexico', val: 'NM'},
        {key: 'nevada', val: 'NV'},
        {key: 'new york', val: 'NY'},
        {key: 'ohio', val: 'OH'},
        {key: 'oklahoma', val: 'OK'},
        {key: 'oregon', val: 'OR'},
        {key: 'pennsylvania', val: 'PA'},
        {key: 'puerto rico', val: 'PR'},
        {key: 'rhode island', val: 'RI'},
        {key: 'south carolina', val: 'SC'},
        {key: 'south dakota', val: 'SD'},
        {key: 'tennessee', val: 'TN'},
        {key: 'texas', val: 'TX'},
        {key: 'utah', val: 'UT'},
        {key: 'virginia', val: 'VA'},
        {key: 'virgin islands', val: 'VI'},
        {key: 'vermont', val: 'VT'},
        {key: 'washington', val: 'WA'},
        {key: 'wisconsin', val: 'WI'},
        {key: 'west virginia', val: 'WV'},
        {key: 'wyoming', val: 'WY'}
        
    ])
}

module.exports = {
    filterDentalClinicsBySearchKeyword, 
    filterVetClinicsBySearchKeyword, 
    setUSAStatesCodesAndNamesInCache,
    isAvailabilityNotValid
}