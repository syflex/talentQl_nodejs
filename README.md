# talentQl_nodejs

This is a simple nodejs server (No framework or library used) for TalentQL Test

## Installation

1. Clone repository - `$ git clone https://github.com/syflex/talentQl_nodejs`

2. redirect into the directory - `$ cd talentQl_nodejs`

3. Install dependencies - `$ npm install`

4. Create a new file `.env` if it doesn't exist and copy the contents of `.env.example`

## Running the server locally

1. Start up the server - Run `$ npm run dev`

2. Server should be running on http://localhost:5000/ by default 


## e2e Tests

1. Start up `$ npm run test`

## Routes

| Routes                                             | Description                    |
| -------------------------------------------------- | ------------------------------ |
| [POST] &nbsp; /api/auth/validate_payment           | Validate card/payment details  |
| [POST] &nbsp; /api/auth/validate_card              | check card status and type     |
| [POST] &nbsp; /api/auth/generate_key               | get new authorization token    | 
