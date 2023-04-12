const mysql = require('mysql');
const { Schema } = mysql;

const DetailsSchema = new Schema({
    PrimaryEmergencyContact:{
        type: Number,
        required: true,
        unique: true
    },
    PhoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    SecondaryEmergencyContact:{
        type: Number,
        required: true,
        unique: true
    },
    Relationship:{
        type: String,
        required: true,
    }
  });
  const Details = mysql.model('details', DetailsSchema);
  module.exports = Details