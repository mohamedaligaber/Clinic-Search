class Clinic{
    constructor(clinicName, stateName, stateCode, openingFrom, openingTo) {
        this.clinicName = clinicName
        this.stateName = stateName
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

    setStateName (stateName) {
        this.stateName = stateName
    }

    getStateName () {
        return this.stateName
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

module.exports = Clinic