'use strict'

const Station = require('../modelos/station')
const bike = require('../modelos/bike')

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

        return res.status(200).send({station: station})
        console.log(err)
    })
}


//detalle de las stations una por una
function getStationById(req, res) {
    let stationId = req.params.stationId
    Station.findById(stationId, (err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`La station no existe`)
        res.status(200).send({station})
    })
}

/*ver bike que pertenece a una station
function getBikeDeStationById(req, res) {
    let bikeId = req.params.bikeId
    let stationId = req.params.bikeId

    Station.findById({_id: stationId}, (err, station) => {
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
        if (!station) return res.status(404).send(`station no existe`)
        bikes = Station.getBikesdeStation(station);//COM BUSCO A DINS DE BIKES?
        Bike.findById({_id:bikeId}), (err, bike) => {
            if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)
            if (!bike) return res.status(404).send(`bike no esta en la estacion`)
        }
        res.status(200).send({bike})


    })
    
}*/

//listar bikes de una estación
function getBikesdeStation(req, res) {
    let stationId = req.params.stationId

    Station.findById({_id: stationId}, (err, result) => {
        console.log(result.bikes)
        //console.log(bikes)
        if (err) return res.status(500).send(`Error al realizar la petición: ${err} `)

        return res.status(200).send(result.bikes)
        /*var arraydeIds = result.bikes
        console.log(arraydeIds)
        arraydeIds.forEach(element => {
            console.log(element)
            Bike.findById({_id: element}, (err, bikes) => {
                if(err) return res.status(500).send(`Error al realizar la petición: ${err} `)
                
                return res.status(200).send(element)
            })
        });*/
        //Bike.findById({_id: result.bikes}, (err, bikes) => {

        //})
    })
}

//añadir un bike (ya existente) a una station
function addBikeToStation(req, res) {
    let stationId = req.params.stationId
    console.log(req.params.stationId)
    let bikeId = req.params.stationId
    console.log(req.params.bikeId)

    Station.update({_id: stationId}, {"$push": {"bikes": bikeId}}, (err, result) => {
        console.log(result)
        if (err) res.status(500).send(`Error al actualizar la station: ${err}`)
        if (!result) return res.status(404).send('La station no esta en la bbdd')

        res.status(200).send(result)
    })

}

function deleteBikeDeStation (req, res){
    let stationId = req.params.stationId
    let bikeId = req.params.bikeId
    Station.update({_id: stationId}, {"$pop": {"bikes": bikeId}}, (err, result) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        bike.remove(err => {
            if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
            
            res.status(200).send( `bike eliminada` + result)
        })
    
    })

}

function deleteStation (req, res){
    let stationId = req.params.stationId
    Station.findById(stationId, (err, station) => {
        if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
    
        station.remove(err => {
            if (err) res.status(500).send( `Error al eliminarlo: ${err}`)
            
            res.status(200).send( `station eliminada`)
        })
    
    })

}

module.exports = {
    getStations,
    saveStation,
    getStationById,
    //getBikeDeStationById,
    getBikesdeStation,
    addBikeToStation,
    deleteBikeDeStation,
    deleteStation


}