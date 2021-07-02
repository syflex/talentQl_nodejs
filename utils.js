const keys = Array('simon', 'talentql', 'onazi','nodejs','test')

function getRequestData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
            
        } catch (error) {
            reject(err)
        }
    })
}


function validate_card(card_number) {
        // Accept only digits, dashes or spaces
            if (/[^0-9-\s]+/.test(card_number)) return false;

            // The Luhn Algorithm. It's so pretty.
            let nCheck = 0, bEven = false;
            card_number = card_number.replace(/\D/g, "");

            for (var n = card_number.length - 1; n >= 0; n--) {
                var cDigit = card_number.charAt(n),
                    nDigit = parseInt(cDigit, 10);

                if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

                nCheck += nDigit;
                bEven = !bEven;
            }

            return `${(nCheck % 10) == 0}`;
}

function card_provider(card_number, valide_card) {    
    if (valide_card != 'true') {
        return 'N/A';
    }

    const providers = {
        0: 'N/A', 
        1: 'N/A', 
        2: 'N/A' , 
        3: 'American Express', 
        4: 'Visa', 
        5: 'Mastercard', 
        6: 'Discover',
        7: 'N/A', 
        8: 'N/A', 
        9: 'N/A'
    };

    return providers[card_number];
}

function authorization(res,token){
    if (token && validate_key(token)) {
        return true
    }else{
        sendError(res, '', 'Unauthorized', 401);
        return false;
    }
}

function sendSuccess(res, status, data, message, code='200'){
    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        status: status,
        data: data,
        message: message
    }));
}

function sendError(res, data, message, error_code = 401){
    res.writeHead(error_code, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        status: 'failed',
        data: data,
        message: message
    }));
}

function  validate_input(params) {
    const errors = {};

    for (const property in params) {
        if (!String(params[property]).trim()) {
            errors[property] = property +' is required';
        }
        if (property === 'email' && !(/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/).test(String(params[property]))) {
            errors.email_validation = property + 'is not valid';
        }
        if (property === 'mobile' && !(/^[0]\d{10}$/).test(String(params[property]).trim())) {
            errors.mobile_validation = 'note a valide nigerian mobile number';
        }
    }

    return errors;
}

function generate_key(){
    var key = keys[Math.floor(Math.random()*keys.length)];
    let apiKey = Buffer.from(`${key}-${generateRandomString()}`).toString('base64');
    return apiKey;
}

function validate_key(token){
    let decoded_token = Buffer.from(token, 'base64').toString('ascii')      
    let abstract_key = decoded_token.substr(0, decoded_token.indexOf('-'))
    return keys.includes(abstract_key);
}

const generateRandomString = function () {
    return Math.random().toString(20).substr(2, 16)
}

module.exports = {
    getRequestData,
    validate_card,
    card_provider,
    authorization,
    sendSuccess,
    sendError,
    validate_input,
    generate_key
}