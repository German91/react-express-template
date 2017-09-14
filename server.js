'use strict';

const Express = require('express');
const Path = require('path');
const Logger = require('morgan');
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const MethodOverride = require('method-override');
const Helmet = require('helmet');
const Cors = require('cors');
const Compression = require('compression');

const app = Express();
const PORT = process.env.PORT || 8000;

require('dotenv').config();

// Database
require('./database');

// Security
app.disable('x-powered-by');
app.use(Helmet.xssFilter());
app.use(Helmet.noCache());
app.use(Helmet.noSniff());
app.use(Helmet.frameguard());
app.use(Helmet.hidePoweredBy());

// Config
app.use(Logger('combined'));
app.use(BodyParser.json({ type: '*/*' }));
app.use(BodyParser.urlencoded({ 'extended': false }));
app.use(CookieParser());
app.use(MethodOverride());
app.use(Compression());
app.use(Cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// API Routes
require('./routes')(app);

app.listen(PORT, (err) => {
  if (err) {
      console.error(err);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});

module.exports = app;
