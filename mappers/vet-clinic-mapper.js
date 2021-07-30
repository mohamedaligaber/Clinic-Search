class VetClinicMapper{
    constructor(clinicName, stateCode, openingFrom, openingTo) {
        this.clinicName = clinicName
        this.stateCode = stateCode
        this.openingFrom = openingFrom
        this.openingTo = openingTo
    }

    setClinicName (clinicName) {
        this.clinicName = clinicName
    }

    getClinicName () {
        return this.clinicName
    }

    setStateCode (stateCode) {
        this.stateCode = stateCode
    }

    getStateCode () {
        return this.stateCode
    }

    setOpeningFrom (openingFrom) {
        this.openingFrom = openingFrom
    }

    getOpeningFrom () {
        return openingFrom
    }
    
    setOpeningTo (openingTo) {
        this.openingTo = openingTo
    }

    getOpeningTo () {
        return this.openingTo
    }

}

module.exports = VetClinicMapper