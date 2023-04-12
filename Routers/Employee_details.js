const express = require("express");
const router = express.Router();
const pool = require("../db/connection")
const mysql = require('mysql')


router.post('/employeecontant', async (req, res) => {

    const {employeeId, contactId, PrimaryEmergencyContact, PhoneNumber, SecondaryEmergencyContact, Relationship} = req.body

    const sqlSearch = "SELECT * FROM contact_details WHERE employeeId = ?"
    const search_query = mysql.format(sqlSearch, [employeeId])
    const sqlInsert = "insert into contact_details value(?, ?, ?, ?, ?, ?)"
    const insert_query = mysql.format(sqlInsert, [employeeId, contactId, PrimaryEmergencyContact, PhoneNumber, SecondaryEmergencyContact, Relationship])

    const user =  pool.query(search_query, async (err, result) => {
                  console.log(user,"u");
            pool.query(insert_query, (err, result) => {
            if (err)
                throw (err);
            console.log("--------> Created new User");
            console.log(result);
            res.status(200).send("Created Sucessfully !!!");
            
        })
     }
    )
    })

module.exports = router