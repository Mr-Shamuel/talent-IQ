import experess from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = experess();

const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success api is up and running ", status: 200 });
});
app.get("/books",(req,res)=>{
  res.status(200).json({msg:"this is books endpoint"})
})

// make our app ready for developement  
if(ENV.NODE_ENV==='production'){
  app.use(experess.static(path.join(__dirname,"../frontend/dist")))
  app.get("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist",""));
  })
}

const startServer=async ()=>{
  try {
    await connectDB();
  app.listen(ENV.PORT, () => {
    console.log("listening to the port", ENV.PORT);
  });
  } catch (error) {
    console.log('Error Starting  the server',error)
  }

}

startServer();


