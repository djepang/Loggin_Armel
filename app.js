// app.js
const express = require('express');
const app = express();
const log4js = require('log4js');

// Logger konfigurieren
log4js.configure({
  appenders: { 
    console: { type: 'console' } 
  },
  categories: { 
    default: { appenders: ['console'], level: process.env.LOG_LEVEL || 'INFO' } 
    
  }
});

const logger = log4js.getLogger();

// Middleware für Loggen einrichten
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routenhandler

//(GET) /info
app.get('/info', (req, res) => {
  logger.info('This is an info message');
  res.send('Info message logged');
});


//(GET) /debug
app.get('/debug', (req, res) => {
  logger.debug('This is a debug message');
  res.send('Debug message logged');
});

//(GET) /error
app.get('/error', (req, res) => {
  logger.error('This is an error message');
  res.send('Error message logged');
});


(GET) /fatal
app.get('/fatal', (req, res) => {
  logger.fatal('This is a fatal message');
  res.send('Fatal message logged');
});



// Starten des Servers
const PORT = process.env.PORT ||3000
;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
