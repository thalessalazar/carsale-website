const {check, body, validationResult} = require("express-validator/check");

exports.company = [
    body("cellphone", "O WhatsApp é obrigatório").isString(),
    body("email", "O email é obrigatório").isString(),
];
