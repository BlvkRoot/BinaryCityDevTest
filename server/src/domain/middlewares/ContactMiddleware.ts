import { body } from "express-validator";

const validateContactFields = () => [
  body("name").not().isEmpty().trim().escape().isAlphanumeric(),
  body("surname").not().isEmpty().trim().escape().isAlphanumeric(),
  body("email").isEmail().normalizeEmail(),
];

export { validateContactFields };
