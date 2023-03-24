const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'Rafik',
    password: 'Rafik111993',
    database: 'ArbiGSM'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("ArbiGSM connected")
    }
})

//devices
const getAllProducts = (callback) => {
    const sql ="SELECT * FROM devices"
    connection.query(sql,(err,results)=>{
        callback(err,results)
    })
};



updateOne = (callback,data) =>{
    const sql='update product set ? where id=?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}

addOne = (callback,data) =>{
    const sql='INSERT INTO devices set ?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}

// Customers

const getAllUsers = (callback) => {
    const sql ="SELECT * FROM customers"
    connection.query(sql,(err,results)=>{
        callback(err,results)
    })

};

const addOneUsers = (callback,data) =>{
    const sql='INSERT INTO customers set ?'
    connection.query(sql,data,(err,results)=>{
        callback(err,results)
    })
}

module.exports= { getAllProducts, connection, updateOne, addOne, addOneUsers, getAllUsers};