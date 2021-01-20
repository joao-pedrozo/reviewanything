import mongoose from 'mongoose';

const initDB = () => {
  mongoose.connect(
    'mongodb+srv://root:pass@cluster0.mygcu.mongodb.net/mongocrud?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('🚀 Wear your seat belt, server is up!');
  });
}
  
export default initDB;