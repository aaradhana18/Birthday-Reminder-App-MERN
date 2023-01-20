import  express  from "express";
import mongoose from "mongoose";

const app = express()

app.use("/api", (req,res)=>{
    res.send("Welcome")
})

mongoose.set('strictQuery', true);

mongoose
  .connect(
    "mongodb+srv://madhu18:9442463009@birthdayreminderapp.ge4fzq1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
