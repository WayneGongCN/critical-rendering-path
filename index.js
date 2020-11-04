const express = require('express')
const app = express()
const port = 3000

// static
app.use(blockRequest, express.static('./static'))

// listen port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/**
 * block request
 */
function blockRequest  (req, res, next) {
  const { t } = req.query
  setTimeout(next, t)
}
