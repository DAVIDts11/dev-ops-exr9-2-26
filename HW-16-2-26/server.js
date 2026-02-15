const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

const log4js = require("log4js");
const APP_ID = process.env.APP_ID || "UnknownApp";
log4js.configure({
  appenders: {
    health: {
      type: "file",
      filename: "./logs/myapp.log",
      layout: {
        type: "pattern",
        pattern: "[%p] %d{ISO8601} - %m - " + APP_ID
      }
    }
  },
  categories: {
    default: { appenders: ["health"], level: "info" }
  }
});

const logger = log4js.getLogger("health");



app.get('/health', (req, res) => {
  logger.info("Health check called");
  res.json({
    status:"OK",
    timestamp:Date.now()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})