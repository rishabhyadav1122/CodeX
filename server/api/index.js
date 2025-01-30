require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const authRoute = require("../router/auth-router")
const contactRoute = require("../router/contact-router")
const serviceRoute = require("../router/service-router")
const connectDb = require("../utils/db")
const errorMiddleware = require("../middlewares/error-middleware")
const PORT = 5000;

// let's Handle Cors Policy issue
const corsOptions = {
    origin:"https://code-x-zxjf.vercel.app/",
    methods:"GET, POST , PUT , DELETE , PATCH , HEAD",
    credentials:true,
}


app.use(cors(corsOptions))


app.use(express.json())


app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)


app.use(errorMiddleware)

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
        
    })
})