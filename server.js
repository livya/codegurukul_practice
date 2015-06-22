var express = require('express'); //Node_module for express server

var app = express();

app.set('views',__dirname + '/server/views');
//console.log("to check"  + __dirname);
app.set('view engine','jade');

//app.use is used to use middleware
app.use(express.static('public')); //static route handling

//Routes
app.get('/',function(req,res){
	res.render('index');
	})
//abv thng is call back ...first the / will b executed then function
//req=request =>HTTP REQUEST object
//res=response =>HTTP RESPONSE object

app.listen(3020);
console.log("express server is listening at port 3020");