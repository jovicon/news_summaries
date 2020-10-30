import mongoose from 'mongoose';
import config from 'config';

export const mongoConfig = () => {

    mongoose.connect(config.get('database'), {
       useNewUrlParser: true
   });
   
   mongoose.connection.once("open", () => {
       console.log("MongoDB database connection established successfully.")
   });
   
}