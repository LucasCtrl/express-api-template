module.exports = function checkToken(req, res, next) {
  const token = req.headers['access-token']

  if (token) {
    if (token !== process.env.TOKEN) {
      return res.status(403).json({ message: 'Invalid token!' })
    } else {
      next()
    }
  } else {
    res.status(401).json({ message: 'For having an access to this action, you need to provide a token!' })
  }
}
