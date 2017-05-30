
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
     return console.log('Unable to connect to the Database');
    }
    console.log('Successfully connected to the database');

    /*db.collection('Users').find({'name':'Priya'}).toArray().then((docs)=>{
        console.log('The Users are found ');
        console.log(JSON.stringify(docs,undefined, 2));
    },(err)=>{
        console.log('Couldnt found the records');
    });*/


    db.collection('Users').find({'name':'Sachin'}).count().then((count)=>{
        console.log(`The total users found are ${count}`);
    },(err)=>{
        console.log('Couldnt found the records');
    });

    db.close();
});
