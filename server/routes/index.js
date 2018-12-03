const express = require('express')

function rootRouter() {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    return next()
  })

  return router
}

module.exports = rootRouter