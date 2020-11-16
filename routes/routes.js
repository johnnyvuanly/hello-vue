let express = require('express') // We are going to "require" the express library, similar to Python import. Bring express library into this file
let router = express.Router() // Make a router with this call, express.Router(). This creates an object that understands how to match different request to the different paths with functions that can respond to each individual request

router.get('/', function(req, res, next){ // router.get means configure a route tha is a get request, a request that fetches data
// The path is '/', the function will run to provide a response with three arguements req = request, res = response, next
// req represents the request the client has made, res represents the response the servers going to send back
    res.json( {'message': 'Hello ITEC 2560 Web Programmers'} ) // send a JSON response back
    // With our route handler, any request to the route / will have this function called and this function will return the JSON with the property message with the value hello
})

// Here we export router, the same variable above
module.exports = router // What happens here is another file will be able to include or require this file and will be able to access the router object, line 4 - 9. That object has been configured with the '/' mapping of a path to function

// Everytime you make a change to your server you will have to stop your server with ctrl c and restart it