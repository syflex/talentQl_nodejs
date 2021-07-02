//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
// Our main block
describe('Validator', () => {

    // Consts
    const data = {
      credit_card_number:"4111111111111111",
      expiration_date:"12/23",
      cvv2:"345",
      email:"syflex360@gmail.com",
      mobile:"07067822618"
   }

   const data1 = {
    credit_card_number:"",
    expiration_date:"",
    cvv2:"",
    email:"",
    mobile:""
 }

  /*
  * Test for /getting authorization token
  */
  describe('/GET key', () => {
    it('it should Generate authorization key', done => {
      chai.request(server)
        .get('/api/generate-key')
        .end((err, res) => {
          res.should.have.status('202');
          done();
        });
    });
  });

  /*
  * Test for /Validating payment
  */
  describe('/Validate payment', () => {
    it('it should successfully validate payment ', done => {
      chai.request(server)
        .post('/api/validate-payment')
        .send(data)
        .set('token', 'dGVzdC1iaTEzYjRpYjczNTc=')
        .end((err, res) => {
          res.should.have.status(202);
          done();
        });
    });
  });

  /*
  * Test for /Validating payment
  */
  describe('/Failed authorization token', () => {
    it('it should fail authorization ', done => {
      chai.request(server)
        .post('/api/validate-payment')
        .send(data)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

});
