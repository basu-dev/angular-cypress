const mongoose=require('mongoose')
const DBURI="mongodb://admin:password@mongodb"
const options={
    dbName:"users-db",
  useUnifiedTopology:true,
  useNewUrlParser:true
}
const connecDB = async()=>{
    try{

  await mongoose.connect(DBURI,options); console.log("Database connected")
    }catch(e){
        console.log(e)
    }
}

module.exports=connecDB