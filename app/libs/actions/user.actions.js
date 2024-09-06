import User from '@/models/User';
import bcrypt from 'bcryptjs';
const { connectDB } = require('../mongodb');

export async function createUser(email, password, userName) {
  await connectDB();

  const userFound = await User.findOne({ email });

  if (userFound) {
    throw new Error('Email already exist');
  }

  const hashPassword = await bcrypt.hash(password, 12);

  const user = new User({
    email,
    userName,
    password: hashPassword,
  });

  const savedUser = await user.save();

  return savedUser;
}
