const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    console.log("error");
 return [];
  }
};


var logNote = (note) => {
  console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
};



var saveNotes = (notes)=> {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
  saveNotes(notes);
  return note;
  }
};

var getAll = () => {
   return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
return filteredNotes[0];


};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
saveNotes(filterNotes);

return notes.length !== filterNotes.length;
  };

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
