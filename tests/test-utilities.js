const dentalClinics = [
   {
      "name": "Good Health Home",
      "stateName": "Alaska",
      "availability": {
         "from": "10:00",
         "to": "19:30"
      }
   },
   {
      "name": "Mayo Clinic",
      "stateName": "Florida",
      "availability": {
         "from": "09:00",
         "to": "20:00"
      }
   },
   {
      "name": "Cleveland Clinic",
      "stateName": "New York",
      "availability": {
         "from": "11:00",
         "to": "22:00"
      }
   },
   {
      "name": "Hopkins Hospital Baltimore",
      "stateName": "Florida",
      "availability": {
         "from": "07:00",
         "to": "22:00"
      }
   }
]

const vetClinics = [
   {
      "clinicName": "Good Health Home",
      "stateCode": "FL",
      "opening": {
         "from": "15:00",
         "to": "20:00"
      }
   },
   {
      "clinicName": "National Veterinary Clinic",
      "stateCode": "CA",
      "opening": {
         "from": "15:00",
         "to": "22:30"
      }
   },
   {
      "clinicName": "German Pets Clinics",
      "stateCode": "KS",
      "opening": {
         "from": "08:00",
         "to": "20:00"
      }
   },
   {
      "clinicName": "City Vet Clinic",
      "stateCode": "NV",
      "opening": {
         "from": "10:00",
         "to": "22:00"
      }
   }
]

const dentalClinicsMappers = [
   {
      "name": "Good Health Home",
      "stateName": "Alaska",
      "availabilityFrom": "10:00",
      "availabilityTo": "19:30"
   },
   {
      "name": "Scratchpay Official practice",
      "stateName": "Tennessee",
      "availabilityFrom": "00:00",
      "availabilityTo": "24:00"
   }
]
const vetClinicsMappers = [
   {
      "clinicName": "Good Health Home",
      "stateCode": "FL",
      "openingFrom": "15:00",
      "openingTo": "20:00"
   },
   {
      "clinicName": "Scratchpay Test Pet Medical Center",
      "stateCode": "CA",
      "openingFrom": "00:00",
      "openingTo": "24:00"
   }
]

module.exports = {
   dentalClinics,
   vetClinics,
   dentalClinicsMappers,
   vetClinicsMappers
}