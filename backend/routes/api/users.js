//This file will hold the resources for the route paths beginning with /api/users
// backend/routes/api/users.js
const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Op } = require("sequelize");

const router = express.Router();

//The validateSignup middleware is composed of the "check" and "handleValidationErrors" middleware.
//Error response: Body validation errors
const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Invalid email'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Username is required. Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    check("firstName")
      .exists({ checkFalsy: true })
      .withMessage("First Name is required"),
    check("lastName")
      .exists({ checkFalsy: true })
      .withMessage("Last Name is required"),
    handleValidationErrors
  ];

//validation error handle function:
const userIsExists = async (req, res, next) => {
  const { email, username } = req.body;
  const user1 = await User.unscoped().findOne({ where: {email} });
  const user2 = await User.unscoped().findOne({ where: {username} });

  const userExists = {};
  if(user1) {
    userExists.email = "User with that email already exists";
  }

  if(user2) {
    userExists.username = "User with that username already exists"
  }

  if(Object.keys(userExists).length) {
    const err = new Error("User already exists")
    err.status = 500;
    err.errors = userExists;
    return next(err);
  }

  next();
}

// Sign up
router.post( '/', validateSignup, userIsExists, async (req, res) => {
      const { email, password, username, firstName, lastName } = req.body;
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ email, username, hashedPassword, firstName, lastName });

      const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      };

      await setTokenCookie(res, safeUser);

      return res.json({
        user: safeUser
      });
    }
);



module.exports = router;
