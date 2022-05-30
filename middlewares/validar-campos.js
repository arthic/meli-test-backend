const { validationResult } = require('express-validator')

const validarCampos = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors)
    }
    // Sigue con el sig. moddle o controller
    next()
}

module.exports = {
    validarCampos
}