import { body } from "express-validator";

const validateContactFields = () => [
  body("name").not().isEmpty().trim().escape(),
    body("surname").not().isEmpty().trim().escape(),
    body("email").isEmail().normalizeEmail()
];

export { validateContactFields };
