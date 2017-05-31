var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todo',( req, res) =>{

        console.log(req.body);
        var newTodo = new Todo({
        text:req.body.text,
        completed: req.body.completed
        });

        newTodo.save().then( (doc)=>{
        res.send(doc);
        }, (e)=>{
            res.status(400).send(e);
        });

});

app.get('/todo',(req, res)=>{
   Todo.find({}).then((todos)=>{
       res.send(todos);
   },(e)=>{
       res.send(e)
   });
});

app.listen(3000, ()=>{
    console.log('Listening to the port 3000');
});