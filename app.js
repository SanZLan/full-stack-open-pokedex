import express, { static as serveStatic } from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(serveStatic('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('Pokedex version: 5')
})

app.get('/health', (req, res) => {
  res.send('ok')
})