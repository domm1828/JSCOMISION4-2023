const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5500;
const userRouters = require('./routers/users.routers');
const productRouters = require('./routers/products.routers');
const isActive = require('./middleware/isActive.middleware');

/** METHOD HTTP
 * GET POST PUT PATCH DELETE HEADER OPTIONS
 * app.METHOD(PATH,FUNCTION HANDLER)
 */

/** MODEL(DATA STRUCTURE) VIEW(UI) CONTROLLER(LOGIC) */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))

//app.use(isActive);

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
app.use('/api/products',productRouters)


app.listen(port,()=>{
    console.log("SERVER RUNNING http://localhost:"+port);
})

