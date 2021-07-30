const request = require('supertest')
const app = require('../app')


test('Should return all Vet and Dental Clinics with total 15', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(15)
})

test('Should return 0 Vet and Dental Clinics after sending a not exist Clinic Name', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({clinicName: 'notExistClinicName'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(0)
})

test('Should return all Vet and Dental Clinics with specific Clinic Name', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({clinicName: 'Scratchpay Official practice'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(1)
    expect(clinics[0].clinicName).toEqual('Scratchpay Official practice')
})

test('Should return all Vet and Dental Clinics with specific Availability From value', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({availabilityFrom: '22:00'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(5)
    expect(clinics[0].clinicName).toEqual('Tufts Medical Center')
    expect(clinics[1].clinicName).toEqual('Scratchpay Test Pet Medical Center')
    expect(clinics[2].clinicName).toEqual('Scratchpay Official practice')
    expect(clinics[3].clinicName).toEqual('National Veterinary Clinic')
    expect(clinics[4].clinicName).toEqual('Scratchpay Test Pet Medical Center')
})

test('Should return all Vet and Dental Clinics with specific Availability To value', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({availabilityTo: '23:00'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(4)
    expect(clinics[0].clinicName).toEqual('Tufts Medical Center')
    expect(clinics[1].clinicName).toEqual('Scratchpay Test Pet Medical Center')
    expect(clinics[2].clinicName).toEqual('Scratchpay Official practice')
    expect(clinics[3].clinicName).toEqual('Scratchpay Test Pet Medical Center')
})

test('Should return all Vet and Dental Clinics with specific State Code', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({state: 'FL'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(3)
    expect(clinics[0].clinicName).toEqual('Mayo Clinic')
    expect(clinics[1].clinicName).toEqual('Hopkins Hospital Baltimore')
    expect(clinics[2].clinicName).toEqual('Good Health Home')
})

test('Should return all Vet and Dental Clinics with specific Availability From and To', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({availabilityFrom: '00:00', availabilityTo: '24:00'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(3)
    expect(clinics[0].clinicName).toEqual('Scratchpay Test Pet Medical Center')
    expect(clinics[1].clinicName).toEqual('Scratchpay Official practice')
    expect(clinics[2].clinicName).toEqual('Scratchpay Test Pet Medical Center')
})

test('Should return all Vet and Dental Clinics with specific State Name, Availability From and To', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({state: 'California', availabilityFrom: '00:00', availabilityTo: '24:00'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(2)
    expect(clinics[0].clinicName).toEqual('Scratchpay Test Pet Medical Center')
    expect(clinics[1].clinicName).toEqual('Scratchpay Test Pet Medical Center')
})

test('Should return all Vet and Dental Clinics with specific Clinic Name and State Code', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({clinicName: 'Mayo Clinic', state: 'Florida'})
        .send()
        .expect(200)
    const clinics = response.body.data
    expect(clinics.length).toEqual(1)
})

test('Should return error message that the state name or code not exist', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({state: 'WrongStateName'})
        .send()
        .expect(400)
        expect(response.body.errorMessage).toEqual('value sent is not an USA State Code or State Name')
})

test('Should return error message that the or availability from not in correct format', async () => {
    const response = await request(app)
        .get('/v1/clinics')
        .query({availabilityFrom: '25:66'})
        .send()
        .expect(400)
        expect(response.body.errorMessage).toEqual('Availability From should be in correct "HH:MM" format')
})