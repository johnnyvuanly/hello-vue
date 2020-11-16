let express = require('express')
let routes = require('./routes/routes')
let path = require('path') // We have to require the path library

// Create a web app
let app = express()

// Vue app files are called static files which are always the same, so every user that uses your app they'll have the exact same JavaScript, HTML, CSS Vue app. The code that is running is the same for everybody
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist'))) // Join together the directory that your code is running in

// Tell our app to use the route we just created
app.use('/api', routes)

// Start the server running
let server = app.listen(process.env.PORT || 3000, function() { // Have our app listen to requests on a particular port
// process.env.PORT means the computer the server has a specified port for it to use then use that port BUT if it hasn't use 3000
    console.log('Express server running on port', server.address().port) // Print the port that it's running on

// We don't need a function but it will tell us that our app is running
}) 
