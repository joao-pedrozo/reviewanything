import mongoose, { Schema } from 'mongoose';

/*
  There is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

const ReviewSchema = new Schema({
  text: String,
  created_at: Date,
  by_user: String,
  overall: Number,
});

export default mongoose.model('Review', ReviewSchema);
