const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', { creatorName: 'LucasCtrl' })
})

module.exports = router
