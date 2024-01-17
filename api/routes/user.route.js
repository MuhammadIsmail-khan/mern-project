import express from 'express'
const userRouter =express.Router()

userRouter.get('/test',(req,res)=>{
    res.json({
        message:"hello world!"
    })
});
export default userRouter;