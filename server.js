let express = require("express")
let app = express()
let port = process.env.port || 8080
let db = require("./models/Workout")
let mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// setting up public directory
app.use(express.static("public"))
//static routes
app.get("/exercise", function(req, res){
    res.sendFile(__dirname + "/public/exercise.html")
})
// API routes
//let routes = require("./controller/routes") TO BE ADDED AFTER ROUTES ARE COMPLETE

// get route for /api/workouts/range to get workouts 
app.get("/api/workouts/range", function(req, res){
    console.log("Workout get route activated")
    db.find({}, function(err, dat){
        if (err){
            console.log(err)
        }
        console.log(dat)
        res.json(dat)
    })
})
// put route for /api/workouts/:id to add exercise to workout 
app.put("/api/workouts/:id", function(req, res){
    let id = req.params.id

    
})
// post route for /api/workouts to create workout 
app.post("/api/workouts", function(req, res){
    
})
// basic get workout request
app.get("/api/workouts", function(req, res){
    console.log("Workout get route activated")
    db.find({}, function(err, dat){
        if (err){
            console.log(err)
        }
        console.log(dat)
        res.json(dat)
    })
})
app.listen(port, function(){
    console.log("Listening on Port 8080 or your platform's default")
})