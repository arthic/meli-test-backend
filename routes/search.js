const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()
const { searchItem, searchResults } = require('../controllers/search')
const { idValido } = require('../helpers/id-validator')
const { validarCampos } = require('../middlewares/validar-campos')

router.get('/', searchResults)

router.get('/:id', [
    check('id').custom(idValido),
    validarCampos
], searchItem)


module.exports = router
