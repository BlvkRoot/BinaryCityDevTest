import { body } from "express-validator";

const validateContactFields = () => [
  body("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .isAlpha()
    .withMessage("Invalid characters")
    .isLength({
      max: 15,
    })
    .withMessage("The Name must not exceed 15 characters"),
  body("surname")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .isAlphanumeric()
    .isLength({
      max: 15,
    })
    .withMessage("The Surname must not exceed 15 characters"),
  body("email").isEmail().normalizeEmail(),
];

export { validateContactFields };
