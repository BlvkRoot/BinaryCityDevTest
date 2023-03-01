import { body } from "express-validator";

const validateClientFields = () => [
  body("name").not().isEmpty().trim().escape()
];

export { validateClientFields };
