const router = require('express').Router()
const checkToken = require('../middleware/checkToken')

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world!' })
})

router.get('/protected', checkToken, (req, res) => {
  res.status(200).json({ message: 'Successfully logged in!' })
})

module.exports = router
