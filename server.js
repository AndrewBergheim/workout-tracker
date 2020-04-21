let express = require("express")
let app = express()
let port = process.env.port || 8080
const path = require("path")
let db = require("./models/Workout")
let mongoose = require("mongoose")
let html = require(path.join(__dirname, "/controller/htmlroutes"))
let api = require(path.join(__dirname, "/controller/APIroutes"))
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// setting up public directory
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// routes
html(app)
api(app)

app.listen(port, function(){
    console.log("Listening on Port 8080 or your platform's default")
})