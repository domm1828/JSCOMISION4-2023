const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    address: {
        type:String
    },
    code_postal: {
        type:String
    },
    city:  {
        type:String
    },
    province: {
        type:String
    },
    street: {
        type:String
    },
    floor:  {
        type:String
    },
    apartment: {
        type:String
    },
    users_id:  {
       type:Schema.Types.ObjectId,
       ref:'users' 
    }
});

const Address = mongoose.model('address',addressSchema); 

module.exports = Address