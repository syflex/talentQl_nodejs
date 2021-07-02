const http = require('http')
const { validateCard, validate_payment, getToken } = require('./controllers/validationController')
const { authorization, sendError } = require('./utils')


// create server and map the routs
const server = http.createServer((req, res) => {    
    if(req.url === '/api/generate-key' && req.method === 'GET') {
        getToken(req, res);
    }else if (!authorization(res, req.headers.token)) {
        return
    } else if(req.url === '/api/validate-payment' && req.method === 'POST') {
        validate_payment(req, res);
    } else if(req.url === '/api/validate-card' && req.method === 'POST') {
        validateCard(req, res);
    } else {
        sendError(res, '', 'Route Not Found', 404)
    }    
})

// get port number from environment vareable else use default 5000
const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;






