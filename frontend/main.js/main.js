const {Client}=require('pg');

const client=new Client({
    host:"localhost", 
    user:"postgres",
    port:5432,
    password:"your_db_password",
    database:"db"
});
(async()=>{
    try {
        await client.connect();
        console.log("connected to db");
        const res=await client.query('Select * from table');
        console.log(res.rows);
    } catch (err) {
        console.log(err.message);
    } })();
/*con.connect()
//.then(()=>{
    console.log("connected")
}
.catch(err=>console.log(err.message));

con.query('Select * from table', (err, ress ))=>{
    if(!err){
        console.log(res.rows)
    }else{
        console.log(err.message)
    }
    con.end();
}/*