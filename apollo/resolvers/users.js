import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserInputError } from "apollo-server";

import {
  validateRegisterInput,
  validateLoginInput,
} from "../../utils/validators.js";
import User from "../../models/User.js";

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
};

const userResolver = { 
  Query: {
    async getUsers() {
    try {
      const users = await User.find();
      return users;
    } catch(err) {
      throw new Error(err);
    }
  }
},

  Mutation: {
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);
      const user = await User.findOne({ username });

      if (!valid) {
          throw new UserInputError('Errors', { errors });
      } 

      if (!user) {
        errors.general = "user not found";
        throw new UserInputError("user not found", { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = "wrong credentials";
        throw new UserInputError("wrong credentials", { errors });
      }

      const token = generateToken(user);

      return {
          ...user._doc,
          id: user._id,
          token,
      }
    },

    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );

      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      // checking for existing username
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("username is taken", {
          errors: {
            username: "this username is taken",
          },
        });
      }

      //checking for existing email
      const userEmail = await User.findOne({ email })
      if (userEmail) {
        throw new UserInputError("email is already registered", {
          errors: {
            email: "this email is registered already",
          }
        })
      }

      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};

export default userResolver;
