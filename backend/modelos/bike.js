'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//esquema de bike
const BikesSchema  = new Schema({
    _id: String,
    name: String,
    kms: Number, 
    description: String,
    state: String
})

module.exports = mongoose.model('Bike', BikesSchema)