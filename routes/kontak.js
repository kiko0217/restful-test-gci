const express = require('express')
const router = express.Router()
const KontakController = require('../controller/KontakController')


router.get('/daftar/:id', KontakController.indexById)
router.get('/daftar', KontakController.index)
router.post('/buat', KontakController.create)
router.put('/ubah', KontakController.update)
router.delete('/hapus', KontakController.destroy)
module.exports = router