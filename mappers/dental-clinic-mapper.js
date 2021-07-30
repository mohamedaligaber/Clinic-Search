class DentalClinicMapper{
    constructor(name, stateName, availabilityFrom, availabilityTo) {
        this.name = name
        this.stateName = stateName
        this.availabilityFrom = availabilityFrom
        this.availabilityTo = availabilityTo
    }

    setName (name) {
        this.name = name
    }

    getName () {
        return this.name
    }

    setStateName (stateName) {
        this.stateName = stateName
    }

    getStateName () {
        return this.stateName
    }

    setAvailabilityFrom (availabilityFrom) {
        this.availabilityFrom = availabilityFrom
    }

    getAvailabilityFrom () {
        return this.availabilityFrom
    }
    
    setAvailabilityTo (availabilityTo) {
        this.availabilityTo = availabilityTo
    }

    getAvailabilityTo () {
        return this.availabilityTo
    }

}

module.exports = DentalClinicMapper