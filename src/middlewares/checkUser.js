import createHttpError from 'http-errors';
import { UsersCollection } from '../models/User.js';

export const checkUser = async (req, res, next) => {
  const userId = req.user._id;
  if (!userId) {
    throw createHttpError(401, 'User id is missing');
  }

  const user = await UsersCollection.findOne(userId);
  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  next();
};
