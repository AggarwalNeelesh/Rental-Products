const mongoose = require('mongoose');

const { Schema } = mongoose

const RentalSchema = new Schema({
    prname:{
        type: String
    },
    price:{
        type: String
    },
    orderid:{
        type: String
    },
    phno:{
        type: String
    },
    address:{
        type: String
    },
    email :{
        type: String
    },
    name :{
        type: String
    },
    date :{
        type: Date,
        default: Date.now
    }
  });

  const Rental = mongoose.model('rental', RentalSchema);
  module.exports = Rental;