const express = require('express')

const mockUsers = [{
  name: 'Souma Suzuki',
  age: 22
}]

function usersRouter(nuxt) {
  const router = express.Router()

  router.get('/', (req, res, next) => {
    res.context = {
      users: mockUsers
    }
    return next()
  })

  return router
}

module.exports = usersRouter