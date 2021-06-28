const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/api/validate_card' && req.method === 'POST') {
        res.writeHead(200);
        res.end(`hello world`);
    }  else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;
