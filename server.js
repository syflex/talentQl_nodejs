const http = require('http')
const { validateCard, validate_payment, getToken } = require('./controllers/validationController')
const { authorization, sendError } = require('./utils')

const server = http.createServer((req, res) => {    
    if(req.url === '/api/generate_key' && req.method === 'GET') {
        getToken(req, res);
    }else if (!authorization(res, req.headers.token)) {
        return
    }else if(req.url === '/api/validate_card' && req.method === 'POST') {
        validateCard(req, res);
    } else if(req.url === '/api/validate_payment' && req.method === 'POST') {
        validate_payment(req, res);
    } else if(req.url === '/api/generate_key' && req.method === 'GET') {
        getToken(req, res);
    } else {
        sendError(res, '', 'Route Not Found', 404)
    }    
})

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;






