import mongoose from "mongoose";
import colors from "colors";

//mongo Connection
const connectDb=async()=>{ 
    try{ 
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect to database ".bgMagenta.white)
    }
    catch(error){ 
        console.log("Error to connect database ".bgRed.white);
    }
}

export default connectDb;