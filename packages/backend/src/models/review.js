import mongoose, { Schema } from 'mongoose';

/*
  There is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

const ReviewSchema = new Schema({
  title: String,
  text: String,
  byUser: String,
  url: String,
  overall: Number,
  created_at: Date,
});

export default mongoose.model('Review', ReviewSchema);
