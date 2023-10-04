const express = require('express');
const app = express();
const port = 3500;
const userRouters = require('./routers/users.routers')

/** METHOD HTTP
 * GET POST PUT PATCH DELETE HEADER OPTIONS
 * app.METHOD(PATH,FUNCTION HANDLER)
 */

/** MODEL(DATA STRUCTURE) VIEW(UI) CONTROLLER(LOGIC) */

app.get('/',(req,res)=>{
    res.json({message:'welcome V.0.0.1'});
});

app.post('/',(req,resp)=>{
    resp.send('Peticion POST');
})


app.post('/hello',(req,resp)=>{
    resp.send('Peticion POST HELLO');
})

app.use('/api/users',userRouters);

app.listen(port,()=>{
    console.log("SERVER RUNNING http://localhost:"+port);
})

