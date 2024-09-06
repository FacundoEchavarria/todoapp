import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: [true, 'Email is require'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email is not valid'],
  },
  password: {
    type: String,
    require: [true, 'Password is require'],
    select: false,
  },
  userName: {
    type: String,
    require: [true, 'Name is require'],
    minLength: [3, 'Name must be at least 3 characters'],
    maxLength: [50, 'Name must be at most 50 charecters'],
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
