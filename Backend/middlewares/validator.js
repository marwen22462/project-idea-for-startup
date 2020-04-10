const { check, checkSchema,validationResult } = require('express-validator')

let Schema={
    role: {
        in: "body",
        matches: {
            options: [/\b(?:administrator|entrepreneur|junior|incubator)\b/],
            errorMessage: "Invalid role"
        }
    }
    
}
exports.registerRules = () => [
    check('email', ' this field is required ').notEmpty(),
    check('email', ' this field should be a valid email ').isEmail(),
    check('password', ' this field is required ').notEmpty(),
    check('password', ' password should be a 6 character minimum ').isLength({min:6}),
    check('accountType', ' must choose a valid type ').notEmpty()
    // checkSchema(Schema)
]
const errorFormatter = ({ msg }) => {
    return `${msg }`}
exports.validator = (req, res, next)=>{
    const errors = validationResult(req).formatWith(errorFormatter)
    errors.isEmpty() ? next() : res.status(400).json({errors: errors.array() })
}
exports.postRules = () =>[
check('title', ' this field is required ').notEmpty(),
    check('title', ' at least 6 characters ').isLength({min:6}),
    check('body', ' this field is required ').notEmpty(0),
    check('body', ' you must right at least 20 characters').isLength({min:20})
]
    