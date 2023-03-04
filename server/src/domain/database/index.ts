import mongoose from "mongoose";

const dbConnection = async () => {
    try {
      await mongoose.connect(String(process.env.DATABASE_URL));  
    } catch (error) {
      console.log(error);
    }
};

dbConnection();

export { mongoose };
