 import express from "express"
 import dotenv from "dotenv"
 import connectdb from "./database/index.js"
  import cors from "cors"
  import { clerkMiddleware } from '@clerk/express'
import clerkwehbook from "./controller/clerkwebhooks.js"
 dotenv.config()
  const app= express();
   app.use(cors())
   app.use(express.json());
   app.use(clerkMiddleware())
   app.use("/api/clerk",clerkwehbook);
  connectdb();
   app.get("/", async(req, res)=>{
     res.send("We are working fine on this port");
   })
   app.listen(process.env.Port_No||4000, ()=>{
     console.log("working fine on this port number" , process.env.Port_No);
   })