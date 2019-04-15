'use strict'

const {ObjectId} = require('mongodb');
const Station = require('../modelos/station')
const Bike = require('../modelos/bike')

//funciones
//listado de stations
function getStations(req, res) {
    Station.find({}, (err, stations) => {
        if (err) return res.status(500).send(`Error al realizar la petición a ala base de datos: ${err} `)
        if (!stations) return res.status(404).send('No hay stations')
        res.status(200).send(stations)
    })
}

//guardar stations
function saveStation(req, res) {
    console.log(req.body);
    let station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description
    });
    console.log(station);
    station.save((err, station) => {
        console.log(station)
        if (err) res.status(500).send({mensaje: `Error al guardar en la base de datos ${err}`})
        return res.status(200).send(station)
    })
}


//detalle de las stations una por una
function getStationById(req, res) {
    console.log("getStationById")
    let stationId = req.params.stationId
    Station.findById(ObjectId(stationId), (err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`La station no existe`)
        res.status(200).send(station)
    })
}

//listar bikes de una estación
function getBikesDeStation(req, res) {
    let stationId = req.params.stationId
    Station.findById(ObjectId(stationId), (err, station) => {
        //console.log(bikes)
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        console.log(station.bikes) // PINTA IDS DE LES BIKES DE LA STATION
        var bikes = []
        station.bikes.array.forEach(bikeId => {
            Bike.findById(ObjectId(bikeId), (err, bike) => {
                if(!err) bikes.push(bike)
                else return res.status(500).send(`Error al realizar la petición: ${err} `)
            })
        });
        return res.status(200).send(bikes)
    })
}

//añadir un bike (ya existente) a una station
function addBikeToStation(req, res) {
    let stationId = req.params.stationId
    console.log(stationId)
    let bikeId = req.params.bikeId
    console.log(bikeId)
    Station.update(ObjectId(stationId), {"$push": {"bikes": bikeId}}, (err, result) => {
        console.log(result)
        if (err) res.status(500).send(`Error al actualizar la station: ${err}`)
        if (!result) return res.status(404).send('La station no esta en la bbdd')
        Bike.update(ObjectId(bikeId), {"$set": {assigned: true}}, (err, resUpd) => {
            if (err) res.status(500).send(`Error al actualizar la station: ${err}`)
            res.status(200).send(resUpd)
        })
    })
}

function deleteBikeDeStation (req, res){
    let stationId = req.params.stationId
    let bikeId = req.params.bikeId
    Station.update(ObjectId(stationId), {"$pull": {"bikes": bikeId}}, (err, result) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
        Bike.update(ObjectId(bikeId), {"$set": {assigned: false}}, (err, res) => {
            if (err) res.status(500).send( `Error al hacer update del estado: ${err}`)
            res.status(200).send( `bike modificada` + res)
        })
    })
}

function deleteStation (req, res){
    let stationId = req.params.stationId
    Station.remove(ObjectId(stationId), (err, result) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
        else res.status(200).send('station eliminada')
    })
}

module.exports = {
    getStations,
    saveStation,
    getStationById,
    //getBikeDeStationById,
    getBikesDeStation,
    addBikeToStation,
    deleteBikeDeStation,
    deleteStation


}