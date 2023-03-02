import { body } from "express-validator";

const validateClientFields = () => [
  body("name").not().isEmpty().trim().escape().isAlphanumeric(),
  body("clientCode").not().isEmpty().trim().escape().isAlphanumeric(),
];

export { validateClientFields };
