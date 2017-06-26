#!/usr/bin/env node

// facebookBot
// A Facebook Messenger Bot

// hosting =====================================================================
var host = require('./services/hosting_handler')

// database ====================================================================
var database = require('./services/database_handler')

// setup =======================================================================
var express = require('express')

// initialize ==================================================================
var bot = express()

// routing =====================================================================
bot.use(require('./routes'))

// serving =====================================================================
const port = process.env.PORT || 8000;

// listening ===================================================================
bot.listen(port, () => {
  console.log('Bot listening on port', port)
});