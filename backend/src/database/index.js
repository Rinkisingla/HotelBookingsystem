 import mongoose from "mongoose"
 
 const connectdb= async () => {
     try {
         const conn = await mongoose.connect(`mongodb+srv://singlarinki13:K2Ct5yaQYXLb3uF7@cluster0.30rlyv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
         console.log("connection String",conn.connection.host)
        
     } catch (error) {
         console.log("MongoDb connecttion error", error)
     }
    
 }
  export default connectdb