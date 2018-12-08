const express = require('express')
const faker = require('faker')

const maximumUserCount = 1000
const mockUsers = Array.from(Array(maximumUserCount).keys()).map(id => ({
  id,
  name: faker.internet.userName(),
  age: faker.random.number({
    min: 0,
    max: 80
  })
}))

const router = express.Router()

router.get('/', (req, res, next) => {
  res.data = {
    users: mockUsers
  }
  return next()
})

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  const user = mockUsers.find(u => u.id === id)

  res.data = {
    user
  }
  return next()
})

module.exports = router