
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
     return console.log('Unable to connect to the Database');
    }
    console.log('Successfully connected to the database');
  db.collection('Users').findOneAndUpdate(
   {
    'name':'Sagar'
   },
   {$set: {'age' : 20 }
   }
  ).then((result)=>{
      console.log(result);
  })

  //  db.close();
});
