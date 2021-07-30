'use strict';

// Environment Configurations & Variables 
require('dotenv').config({path: './.env.example'})

const utilityFunctions = require('./utils/utility-functions')

// App
const express = require('express')
const app = express()
module.exports = app

const NodeCache = require( "node-cache" )
const appCache = new NodeCache()


// Constants
const PORT = process.env.PORT
const HOST = process.env.HOST

// Cache
utilityFunctions.setUSAStatesCodesAndNamesInCache(appCache)


// Controllers
require('./controllers/clinics-controller')(app, appCache)


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)