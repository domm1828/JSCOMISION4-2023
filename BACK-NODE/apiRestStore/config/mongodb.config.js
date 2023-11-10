const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dmoreno:jH1ZbtJIYrxEKHFh@cm4a.sbjagjl.mongodb.net/").then(()=>{
    console.log("CONECTADO EXISTOSAMENTE")
}).catch((error)=>{
    console.log(error)
})