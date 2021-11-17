const express = require('express')
const Kontak = require('./kontak')
const router = express.Router()

router.get('/', (req,res,next) => {
    res.send('<h1>Api-GCI-KONTAK</h1>')
})

router.use('/api/kontak', Kontak)

module.exports = router