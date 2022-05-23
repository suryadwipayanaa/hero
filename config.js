const mysql = require('mysql')

const connection = mysql.createConnection({
    host : 'localhost',
    port : 3308,
    user : 'root',
    password : '',
    database : 'mobile_legend'
})

connection.connect((err)=>{
    if(err){
        throw err
    } else {
        console.log("database connected")
    }
})

module.exports = connection