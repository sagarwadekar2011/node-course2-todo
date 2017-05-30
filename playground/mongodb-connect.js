const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
     return console.log('Unable to connect to the Database');
    }
    console.log('Successfully connected to the database');
    
 /*   db.collection('todo').insertOne({
        'text':'To connect mogodb',
        'completed':'false'
    }, (err, result)=>{
        if(err){
         return console.log('Unable to insert');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
*/

db.collection('Users').insertOne({
    'name':'Sarita',
    'age' : 23,
    'location':'Bhosari'
}, (err,result)=>{
    if(err){
      return  console.log('Unable to insert the record');
    }
     console.log(JSON.stringify(result.ops,undefined,2));
});

    db.close();
});
