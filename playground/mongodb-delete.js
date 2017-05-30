
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
     return console.log('Unable to connect to the Database');
    }
    console.log('Successfully connected to the database');
 
  // Delete Many
  /*  db.collection('todo').deleteMany({'text':'Doing the lunch'}).then((result)=>{
        console.log(result);

    });
*/

//Delete One
/*

  db.collection('todo').deleteOne({'text':'Doing the lunch'}).then((result)=>{
      console.log(result);
  })*/
  
// Find and Delete

db.collection('todo').findOneAndDelete({'completed':true}).then( (result)=>{
    console.log(result);
})


  //  db.close();
});
