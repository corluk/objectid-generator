import Fastify from "fastify"
import  {ObjectId} from "mongodb" 

export default async()=>{

    const fastify = Fastify({logger:true}) 
    fastify.get("/generate",(req,res)=>{
   
        res.send({code:1,payload: new ObjectId()})
    })

    return fastify
}