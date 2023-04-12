const { createConnection} = require('mysql');

const pool = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Am!t261102',
    database: 'employee',
    connectionLimit: 10
})

pool.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected !!!");
    }
})

module.exports = pool