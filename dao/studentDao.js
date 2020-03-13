let dbuilt = require('./dbuilt');


function selectName( ){
    let querySelect = 'select name from school';
    let connection = dbuilt.createConnection()
    connection.connect()
    connection.query(querySelect, (err, result) => {
        if(err == null){
            console.log(result);
        }else{
            console.log(err);
        }
    })
    // return result
    connection.end()
}

function selectAgeAndSex(age,sex,success){
    let querySelect = 'select name,class from school where age=? and sex=? ';
    let queryParams = [age,sex];
    let connection = dbuilt.createConnection()
    connection.connect()
    connection.query(querySelect,queryParams,(err,result)=>{
        if(err == null){
            // console.log(result);
            success(result)
        }else{
            console.log(err);
        }
    })
    connection.end()
}

function login(num,success){
    let querySelect = 'select num,password from school where num=?';
    let connection = dbuilt.createConnection()
    connection.connect()
    connection.query(querySelect,num,(err,res)=>{
        if(err == null){
            success(res)
        }else{
            throw err
        }
    })

}

module.exports = {
    selectName,
    selectAgeAndSex,
    login
}