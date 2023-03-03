import { body } from "express-validator";

const validateClientFields = () => [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .isLength({
      max: 25,
    })
    .withMessage("The Name must not exceed 25 characters"),
  body("clientCode").not().isEmpty().trim().escape().isAlphanumeric(),
];

export { validateClientFields };
