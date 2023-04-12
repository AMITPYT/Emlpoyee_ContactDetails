const express = require("express");
require("../MultipleContent/db/connection");
const Routers = require("./Routers/Employees")
const Contacts = require("./Routers/Employee_details")
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());


app.use(Routers, Contacts)


app.listen(port, () => {
    console.log(`connection is setup at localhost:${port}`)
})