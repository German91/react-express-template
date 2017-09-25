process.env.NODE_ENV = 'test';

const Mongoose = require('mongoose');
const Chai = require('chai');
const ChaiHttp = require('chai-http');
const Jwt = require('jsonwebtoken');

const server = require('../server');
const User = require('../models/User');

const should = Chai.should();

Chai.use(ChaiHttp);

let authToken = '';

describe('Authentication', () => {
  before((done) => {
    Mongoose.connect(process.env.MONGODB_URI_TEST, { useMongoClient: true });

    done();
  });

  describe('Create User', () => {
    it('It should create an user', (done) => {
      let user = {
        username: 'Test User',
        email: 'test@gmail.com',
        password: 'testing'
      };

      Chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(202);
          res.body.should.be.an('object');

          res.body.should.have.property('code');
          res.body.should.have.property('status');
          res.body.should.have.property('message');
          res.body.should.have.property('token');
          res.body.should.have.property('user');

          authToken = res.body.token;

          done();
        });
    });
  });

  describe('Login User', () => {
    it('It should login an user', (done) => {
      const user = { email: 'test@gmail.com', password: 'testing' };

      Chai.request(server)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          res.body.should.have.property('code');
          res.body.should.have.property('status');
          res.body.should.have.property('token');
          res.body.should.have.property('user');

          done();
        });
    });
  });

  describe('Forgot Password', () => {
    it('It should send an email to recover your password', (done) => {
      Chai.request(server)
        .post('/api/v1/auth/forgot-password')
        .send({ email: 'test@gmail.com' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          res.body.should.have.property('code');
          res.body.should.have.property('status');
          res.body.should.have.property('message');

          done();
        });
    });
  });

  describe('Recover Password', () => {
    it('It should reset your password', (done) => {
      let user = new User({
        username: 'Test User 2',
        email: 'test2@gmail.com',
        password: 'testing'
      });

      user.save((err, user) => {
        const token = Jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '10m' });

        Chai.request(server)
          .post('/api/v1/auth/reset-password')
          .send({ password: 'testingupdated', token })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.an('object');

            res.body.should.have.property('code');
            res.body.should.have.property('status');
            res.body.should.have.property('message');

            done();
          });
      });
    });
  });

  describe('Profile', () => {
    it('It should get user profile', (done) => {
      Chai.request(server)
        .get('/api/v1/auth/profile')
        .set('Authorization', authToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          res.body.should.have.property('_id');
          res.body.should.have.property('username');
          res.body.should.have.property('email');
          res.body.should.have.property('roles');
          res.body.should.not.have.property('password');

          done();
        });
    });
  });

  describe('Logout', () => {
    it('It should log out an user', () => {
      Chai.request(server)
        .get('/api/v1/auth/logout')
        .set('Authorization', authToken)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');

          res.body.should.have.property('code');
          res.body.should.have.property('status');
          res.body.should.have.property('message');

          done();
        });
    });
  });

  after((done) => {
    User.collection.drop(done);
  });
});
