const mongoose = require("mongoose")

let Schema = mongoose.Schema

let workout = new Schema({
    day: {
        type: Date
    },
    exercises: {
        type: Array
    }
})
let toExport = mongoose.model("Workout", workout)

module.exports = toExport