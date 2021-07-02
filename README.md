# talentQl_nodejs

This is a simple nodejs server (No framework or library used) for TalentQL Test

## Installation

1. Clone repository - `$ git clone https://github.com/syflex/talentQl_nodejs`

2. redirect into the directory - `$ cd talentQl_nodejs`

3. Install dependencies - `$ npm install`

4. Create a new file `.env` if it doesn't exist and copy the contents of `.env.example`

## Authorization (Request token)
To be authorized into the application you will need to provide an authorization token on the header of your request.
`authenticated: dGVzdC1iaTEzYjRpYjczNTc=`

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

1. Clone the application to your local  machine
2. At the root directory of the application, install the application dependecies by running the `token: dGVzdC1iaTEzYjRpYjczNTc=` 
3. Rename the `.env.example` file to `.env` then configure your database credentails
4. Start the application using the command `php artisan serve`
## Running the server locally

1. Start up the server - Run `$ npm run dev`

2. Server should be running on http://localhost:5000/ by default 


## e2e Tests

1. Start up `$ npm run test`

## Testing the api

1. Via Postman Collection 

## Routes

| Routes                                             | Description                    |
| -------------------------------------------------- | ------------------------------ |
| [POST] &nbsp; /api/auth/validate_payment           | Validate card/payment details  |
| [POST] &nbsp; /api/auth/validate_card              | check card status and type     |
| [POST] &nbsp; /api/auth/generate_key               | get new authorization token    | 
