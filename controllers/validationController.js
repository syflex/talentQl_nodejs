const { getRequestData,validate_card, card_provider,sendSuccess,sendError,validate_input,generate_key  } = require('../utils')


// @desc    Validate Card
// @route   POST /api/validate_card
async function validateCard(req, res) {   

    try {        
        const body = await getRequestData(req);
        const validations = validate_input(JSON.parse(body))
        if (Object.keys(validations).length) {
            sendError(res, validations, 'validation error', 400);
        } 

        
        const { credit_card_number } = JSON.parse(body);
        const card_status = `${validate_card(credit_card_number)}`;
        const data = { 
            valid: card_status,
            card_type: `${card_provider(credit_card_number.charAt(0), card_status)}`,
        }
        const status = card_status === 'true' ? 'success' : 'failed';
        const message = card_status === 'true' ? 'Valide Card' : 'Invalide card';
        sendSuccess(res, status, data, message)

    } catch (error) {
        sendError(res, '', 'internal server error', 500);
    }
}

// @desc    Validation Payment
// @route   POST /api/validate_payment
async function validate_payment(req, res) {
    try {
        const body = await getRequestData(req)  
        const validations = validate_input(JSON.parse(body))
        if (Object.keys(validations).length) {
            sendError(res, validations, 'validation error', 400);
        } 

        const { credit_card_number } = JSON.parse(body)
        const card_status = `${validate_card(credit_card_number)}`;
        const data = { 
            valid: card_status,
            card_type: `${card_provider(credit_card_number.charAt(0),card_status)}`,
        }

        const status = card_status === 'true' ? 'success' : 'failed';
        const message = card_status === 'true' ? 'Valide Card' : 'Invalide card';

        sendSuccess(res, status, data, message)

    } catch (error) {
        sendError(res, '', 'internal server error', 500);
    }
}

// @desc    Generate api key
// @route   GET /api/generate_key
async function getToken(req, res) {  
    let apiKey = generate_key();
    sendSuccess(res, 'success', apiKey, 'message');
}


module.exports = {
    validateCard,
    validate_payment,
    getToken
}