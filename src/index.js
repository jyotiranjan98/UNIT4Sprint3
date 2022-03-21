const express=require("express")
// const mongoose=require("mongoose")
const app=express()

app.use(express.json())


const usercontroller=require("./controllers/user-post")
const bookcontroller=require("./controllers/book-post")

app.use("/user", userController)
app.use("/user",bookController)


app.listen(4000,async()=>{
    try{
        await connect()
        console.log("listen on port")
    }
    catch(err){
        console.log(err)
    }
})