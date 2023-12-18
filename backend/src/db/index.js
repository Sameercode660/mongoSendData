import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect("mongodb+srv://MohdSameer:4vKApycO1AEiyyj8@usolution.snu4vvo.mongodb.net/");
    console.log(connectionInstance.connection.host);
  } catch (error) {
    console.log("Error : ", error);
    throw error;
  }
}

export {connectDB}


