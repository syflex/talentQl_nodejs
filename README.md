# talentQl_nodejs

This is a simple nodejs server (No framework or library used) for TalentQL Test

## Installation

1. Clone repository - `$ git clone https://github.com/syflex/talentQl_nodejs`

2. redirect into the directory - `$ cd talentQl_nodejs`

3. Install dependencies - `$ npm install`
## Authorization (Request token)
To be authorized into the application you will need to provide an authorization token on the header of your request.(does not apply to generate key endpoint)

`token: dGVzdC1iaTEzYjRpYjczNTc=`

## HTTP Status Codes
`200 OK.`

`202 Accepted `

`400 Failed validation  `

`401 Failed authorization `

`404 Route not found `

`500 Server error`

`"status": success.`

`"status": failed.`

## Base URL
`http://localhost:5000`

## Running the server locally

1. Start up the server - Run `$ npm run dev`

2. Server should be running on http://localhost:5000/ by default 


## Auto Tests

1. Start up `$ npm run test`

## Testing the api

1. Via Postman Collection 

## Routes

| Routes                                        | Description                    |
| ----------------------------------------------| ------------------------------ |
| [POST] &nbsp; /api/validate_payment           | Validate card/payment details  |
| [POST] &nbsp; /api/verify-card                | check card status and type     |
| [GET] &nbsp; /api/generate_key                | get new authorization token    | 


## Request payload for:
/api/validate_payment

`{

      credit_card_number:"4111111111111111",

      expiration_date:"12/23",

      cvv2:"345",

      email:"myemail@gmail.com",

      mobile:"07065522610"

}`

/api/verify-card

`{

      credit_card_number:"4111111111111111"

}`

/api/generate_key

no payload just get and it will generate the token that you can use in your header