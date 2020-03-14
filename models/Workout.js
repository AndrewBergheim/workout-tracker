const mongoose = require("mongoose")
let Schema = mongoose.Schema

let exercises = new Schema({
    type: {type: String, required: true}, 
    name: {type: String, required: true},
    distance: Number,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
})

let WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [exercises]
});

let WorkoutModel = mongoose.model("Workout", WorkoutSchema)

module.exports = WorkoutModel;