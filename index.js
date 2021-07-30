var xenialdb = require('xenialdb')
var db = new xenialdb('data.json')
db.ready = function(){
  db.value.c= "adhvaith is the best"
  db.value.d="hello"
  db.value.message="unknown"
	db.write(function(){
		console.log("Data stored!")
    console.log(db.value);
	})
	
}
