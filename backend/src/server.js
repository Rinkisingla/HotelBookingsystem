 import express from "express"
 import dotenv from "dotenv"
 import connectdb from "./database/index.js"
  import cors from "cors"
  import { clerkMiddleware } from '@clerk/express'
import clerkwebhook from "./controller/clerkwebhooks.js"
 dotenv.config()
  const app= express();
   app.use(cors())
   app.use(express.json());
   app.use(clerkMiddleware())
   app.post("/api/clerk", express.raw({ type: "application/json" }), clerkwebhook);

  connectdb().catch(err => {
  console.error("Database connection failed", err);
  process.exit(1);
});
   app.get("/", async(req, res)=>{
     res.send("We are working fine on this port");
   })
  app.listen(process.env.PORT_NO || 4000, () => {
  console.log("working fine on this port number", process.env.PORT_NO || 4000);
});