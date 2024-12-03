//importing express lib. 
const  express = require('express')
//taking instance from express
const app = express()
//localhost:30
const port = 30
const mysql=require('mysql2')
//connection to database as sql not mongodb
const q=mysql.createConnection({
    host: 'localhost',
    database: 'nodedb',
    user:'root',
    password:''
})
// endpoint called hello with getter
app.get('/hello', (req, res) => {
    q.execute(`select * from users`,(err,result)=>{
console.log(err);
      //taking te data from database as jeson file
        res.json({user: result});
    });
    // res.send('Hello World!')  
})
app.listen(port, () =>  console.log(`Example app liistening on port ${port}!`))
