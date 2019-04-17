'use strict'

const express = require('express')
const stationCtrl = require('../controller/station')
const bikeCtrl = require('../controller/bike')
const api = express.Router()


//STATION: http://localhost:3000/api/
api.post('/station/new', stationCtrl.saveStation)
api.post('/station/newBike/', stationCtrl.addBikeToStation)
api.get('/station/:stationId', stationCtrl.getStationById)
api.get('/stations', stationCtrl.getStations)
api.get('/station/getBikes/:stationId', stationCtrl.getBikesDeStation)



//api.get('station/bikeById/:stationId/:bikeId', stationCtrl.getBikedeStationById)
api.delete('/station/delete/:stationId', stationCtrl.deleteStation)
api.delete('/station/deleteBike/:stationId/:bikeId',stationCtrl.deleteBikeDeStation)


//Bikes: http://localhost:3000/api/
api.post('/bike/new', bikeCtrl.saveBike)
api.get('/bike/getBikes', bikeCtrl.getBikes)
api.get('/unassigned', bikeCtrl.getUnassignedBikes)
//api.get('/bike/:bikeId', bikeCtrl.getBikeById)
api.get('/bike/:bikeId', bikeCtrl.getBikeById)
//api.put('/bike/modificar/:bikeId', bikeCtrl.updateBike)
api.delete('/bike/delete/:bikeId', bikeCtrl.deleteBike)

//api.put('/relacion/:stationId/:bikeId', stationCtrl.addBikeToStation)
//api.get('/relacion/getStations', stationCtrl.getStations)
//api.get('/relacion/getBikes/:stationId', stationCtrl.getBikesOfStation)

module.exports = api;