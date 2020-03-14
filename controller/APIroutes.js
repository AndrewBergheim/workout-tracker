let db = require("../models/Workout")
let routes = function(app) {
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
    // post route for /api/workouts to create workout 
    app.post("/api/workouts", function(req, res){
        console.log("POST ROUTE INIT")
        let data = req.body
        if(data){ // check for empty request
            console.log(data)
        }
        //console.log(data)
    })
    
    // put route for /api/workouts/:id to add exercise to workout 
    app.put("/api/workouts/:id", function(req, res){
       /*
        let theirId = req.params.id
        let data = req
        console.log(data)
      
        db.update({id: theirId}, {
            $push: {
                exercises: {
    
                }
            }
        })
    */
        
    })
    
    // basic get workout request
    app.get("/api/workouts", function(req, res){
        console.log("Workout get route activated")
        

        db.find({}, function(err, dat){
            if (err){
                console.log(err)
            }
            console.log(dat.length)
            //loop through each workout, then get stats for each one
            for (let o = 0; o < dat.length;o++){
                let totalDuration = 0;
                let totalWeight = 0;
                let totalSets = 0;
                let totalReps = 0;
                // nested loop to get stats for each session
                for (let i = 0; i < dat[o].exercises.length; i++){
                    // total duration loop
                    totalDuration += dat[o].exercises[i].duration
                    //console.log(dat[o].exercises[i])
                    // total weight loop
                    if (dat[o].exercises[i].weight){
                        totalWeight += dat[o].exercises[i].weight
                    }
                    //total sets loop
                    if (dat[o].exercises[i].sets){
                        totalSets += dat[o].exercises[i].sets
                    }
                    //total reps loop
                    if (dat[o].exercises[i].reps){
                        totalReps += dat[o].exercises[i].reps
                    }
                    dat[o].totalDuration = totalDuration
                    dat[o].totalWeight = totalWeight
                    dat[o].totalSets = totalSets
                    dat[o].totalReps = totalReps   
                }
            console.log(dat[o])   
            }
            console.log("looped")
            res.json(dat)
        })
    })
}
module.exports = routes