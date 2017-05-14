const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
.command('add','Add a New Note',{
  title: {
    describe: 'Title Of Note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
  }
})
.command('list','List all notes')
.command('read','Read a Note',{
  title: {
    describe: 'Title Of Note',
    demand: true,
    alias: 't'
  }
})

.command('remove','Remove a Note',{
  title: {
    describe: 'Title Of Note',
    demand: true,
    alias: 't'
  }
})

.help()
.argv;
var command = argv._[0];
//console.log('Command: ', command);
//console.log('Yargs', argv);

if (command === 'add') {
    console.log('Note Created');
  var note = notes.addNote(argv.title, argv.body);
  if (note){
notes.logNote(note);
  }
  else {console.log("NOTE TITLE TAKEN")};

} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)..`);
  allNotes.forEach((note) =>{
    notes.logNote(note);
  });

}

else if (command === 'read') {
  console.log('Note Found');
  var note = notes.getNote(argv.title);

if(note){
notes.logNote(note);
}
else{
  console.log("NOTE NOT FOUND..");
}
}
else if (command === 'remove') {
  var noteremoved = notes.removeNote(argv.title);
  var message = noteremoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command Not Recognized, try --help');
}
