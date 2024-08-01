const mongoose = require('mongoose');

// Database connection functino 
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://delsipatel21:delsi102.@cluster0.hlbkhim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
