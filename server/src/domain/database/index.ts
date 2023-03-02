import mongoose from "mongoose";

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@binarycitycluster.2qjxzq7.mongodb.net/?retryWrites=true&w=majority`;

const dbConnection = async () => {
    try {
      await mongoose.connect(uri);  
    } catch (error) {
      console.log(error);
    }
};

dbConnection();

export { mongoose };
