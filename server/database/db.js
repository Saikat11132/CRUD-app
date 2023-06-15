import mongoose from "mongoose";

const connection = async(username,password)=>{
    const url=`mongodb://${username}:${password}@ac-054frn9-shard-00-00.0nodr5i.mongodb.net:27017,ac-054frn9-shard-00-01.0nodr5i.mongodb.net:27017,ac-054frn9-shard-00-02.0nodr5i.mongodb.net:27017/crud-app?ssl=true&replicaSet=atlas-y2rdm5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log("Successs./|/|/|............");

    }catch(error){
        console.log(`Error..........`,error);
    }
}
export default connection;