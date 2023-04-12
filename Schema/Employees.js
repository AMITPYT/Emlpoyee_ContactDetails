const mysql = require('mysql');
const { Schema } = mysql;

const EmployeeSchema = new Schema({
    EmployeeFullName:{
        type: String,
        required: true
    },
    Jobtitle:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true,
        unique: true
    },
    PhoneNo:{
        type: Number,
        required: true,
    },
    Address:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    }
  });
  const Employee = mysql.model('employee', EmployeeSchema);
  module.exports = Employee