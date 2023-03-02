import mongoose from "mongoose";

const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@binarycitycluster.2qjxzq7.mongodb.net/?retryWrites=true&w=majority`;

const dbConnection = async () => {
    await mongoose.connect(uri);
};

dbConnection();

export { mongoose };
