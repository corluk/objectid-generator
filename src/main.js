import App from "./rest" 

(async ()=>{


    const app = await App() 
    
    const port = process.env.PORT  || 8090 
    const bind = process.env.bind || "0.0.0.0"
    app.listen(port,bind ,(err,address)=> {
        if(err){
            console.debug(err.message)
        }
        else {
            console.log(`listening on ${port}, waiting connections from ${address}`)

        }
    
    })
})()
