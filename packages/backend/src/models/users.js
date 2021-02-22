import mongoose, { Schema } from 'mongoose';

/*
  There is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

const UserSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  imageUrl: String,
});

export default mongoose.model('User', UserSchema);
