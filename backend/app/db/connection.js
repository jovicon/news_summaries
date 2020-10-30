import mongoose from 'mongoose';

export const mongoConnect = (config) => {

    mongoose.connect(config.get('database'), {
       useNewUrlParser: true
    });
   
    mongoose.connection.once("open", () => {
       console.log("MongoDB database connection established successfully.")
    });
   
}