const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const { searchItem, searchResults } = require('../controllers/search')
const { idValido } = require('../helpers/id-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const express = require('express');
const app = express();

router.get('/', searchResults)

router.get('/:id', [
    check('id').custom(idValido),
    validarCampos
], searchItem)

app.get('/items', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
})


module.exports = router
