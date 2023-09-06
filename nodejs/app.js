const http = require('http'); //request the document in nodejs
const port = 3000; //saying what port we're going to use to this server

const server = http.createServer(function(req, res) //everytime someone request a page in the server , its going to call this function
{
    res.writeHead(200, {'Content-type'})
    res.write('Hello Node');
    res.end()
})

server.listen(port, function(error) //as soon as he server starts listening, it'll call this function to see if there's an error or not
{
    if(error) {
        console.log('somenthing went wrong', error)
    }
    else {
        console.log('Server is listening on port ' +  port)
    }
})