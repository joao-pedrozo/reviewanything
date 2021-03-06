import mongoose from 'mongoose';

const initDB = () => {
  mongoose.connect(
    'mongodb+srv://root:pass@cluster0.mygcu.mongodb.net/mongocrud?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  mongoose.connection.once('open', () => {});
};

export default initDB;
