const express = require("express");
const router = express.Router();
const pool = require("../db/connection")
const mysql = require('mysql')



router.post('/createemployee', async (req, res) => {

    const {EmployeeId, EmployeeFullName, Jobtitle, Email, PhoneNo, Address, City, State} = req.body
    const sqlSearch = "SELECT * FROM employee_deatils WHERE Email = ?"
    const search_query = mysql.format(sqlSearch, [Email])
    const sqlInsert = "insert into employee_deatils value(?, ?, ?, ?, ?, ?, ?, ?)"
    const insert_query = mysql.format(sqlInsert, [EmployeeId, EmployeeFullName, Jobtitle, Email, PhoneNo, Address, City, State ])

    const user = pool.query(search_query, async (err, result) => {
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

router.get('/getdata/:id', (req, res) => {

    const EmployeeId = req.params.id;
    console.log(EmployeeId);
    pool.query('select * from employee_deatils where EmployeeId = ?', EmployeeId, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send(result)
            console.log(result);
        }
    })
});
router.get('/getdata', (req, res) => {

    pool.query('select * from employee_deatils ', (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send(result)
            console.log(result);
        }
    })

});
router.delete('/deletedata/:id', (req, res) => {

    const deleteId = req.params.id;
    const query ='DELETE employee_deatils FROM employee_deatils INNER JOIN contact_details ON contact_details.EmployeeId = employee_deatils.EmployeeId WHERE employee_deatils.EmployeeId = ?;'
    pool.query(query, deleteId, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send("DELETED")
            console.log(result);
        }
    })

});

router.put('/updatedata/:id', (req, res) => {

    const { EmployeeFullName, Jobtitle, Address, City, State} = req.body
    const updatequery = 'UPDATE employee_deatils SET EmployeeFullName = ?, Jobtitle = ?, Address = ?, City = ?, State = ?  where employeeId = ?';
    const value = [ EmployeeFullName, Jobtitle, Address, City, State, req.params.id ]
    console.log(req.params.id);
    pool.query(updatequery, value, (err, result,) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send("Updated")
            console.log(result);
        }
    })

});

router.get('/getcontactdetails/:id', (req, res) => {

    const details = 'SELECT * FROM employee_deatils INNER JOIN contact_details ON contact_details.EmployeeId = employee_deatils.EmployeeId WHERE employee_deatils.EmployeeId = ?;'
    pool.query(details, req.params.id, (err, result) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.send("Details")
            res.json({result})
            console.log(result);
        }
    })

});

module.exports = router;