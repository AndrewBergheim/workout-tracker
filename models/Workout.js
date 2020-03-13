const mongoose = require("mongoose")
let Schema = mongoose.Schema

let schema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array
    }
});

let toExport = mongoose.model("Workout", schema)

module.exports = toExport;