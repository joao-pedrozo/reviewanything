import mongoose, { Schema } from 'mongoose';

/*
  There is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

const ReviewSchema = new Schema({
  name: String,
});

export default mongoose.model('Review', ReviewSchema);
