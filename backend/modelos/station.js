'use strict'
const mongoose = require('mongoose')
const bikesSchema = require('./bike').schema
const Schema = mongoose.Schema

//esquema de bikes 
const StationSchema = new Schema({
    _id: String,
    name: {type: String},
    state: String,
    description: String,
    bikes: [String],
})
module.exports = mongoose.model('Station', StationSchema)