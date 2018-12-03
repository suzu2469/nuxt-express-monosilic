const express = require('express')
const {
  Nuxt,
  Builder
} = require('nuxt')
const nuxtConfig = require('../nuxt.config.js')
const routeRouter = require('./routes/index.js')
const usersRouter = require('./routes/users.js')

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const PORT = process.env.PORT || 3000
const app = express()

async function main() {
  const nuxt = new Nuxt(nuxtConfig)

  if (env === 'development') {
    const builder = new Builder(nuxt)
    builder.build()
  }

  /* Register routes */
  app.use('/', routeRouter())
  app.use('/users', usersRouter())

  app.use(nuxt.render)

  app.listen(PORT, () => {
    console.log(`Listening server on ${PORT}`)
  })
}

main()