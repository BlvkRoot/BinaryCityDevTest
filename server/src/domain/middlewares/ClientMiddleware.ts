import { body } from "express-validator";

const validateClientFields = () => [
  body("name").not().isEmpty().trim().escape(),
  body("clientCode").not().isEmpty().trim().escape(),
];

export { validateClientFields };
