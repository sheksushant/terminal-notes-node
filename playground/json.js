//var obj = {
//name : 'Sushant'

//};

//var stringObj = JSON.stringify(obj);
//console.log(typeof stringObj);

//var personString = '{"name": "SUSHANT","age":25}';
//var person = JSON.parse(personString);

//console.log(person);

const fs = require('fs');

var originalNote = {
  title : 'note1 is title',
  body: 'g me dam'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
