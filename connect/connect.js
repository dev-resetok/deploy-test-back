import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.6mpkpya.mongodb.net/?retryWrites=true&w=majority&appName=app`;

const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", true);
    }

    mongoose.connect(connection_url, {
        dbName : "deploy",
    })
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.error(err);
        console.log("Connected fail to MongDB")
    })
}

export default connect;