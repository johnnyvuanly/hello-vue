import axios from 'axios'

let base = 'api' 

export default { // This line here means provide a function with a name "getHelloMessage"
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        }) // Lines 7 - 9 are the axios call, it's making a get request and when the response is recieved it will automatically convert it from the response decoded into JSON
    }
}

// main.js will make this new function available to the rest of the Vue app