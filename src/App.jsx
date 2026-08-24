import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AllNotes from "./AllNotes";
import Studies from "./Studies";
import Work from "./Work";
import Personal from "./Personal";


function App() {

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = (newNote) => {

    const updatedNotes = [...notes, newNote];

    setNotes(updatedNotes);

    localStorage.setItem(
      "notes",
      JSON.stringify(updatedNotes)
    );
  };
  const deleteNote = (id) => {

  const updatedNotes = notes.filter(
    (note) => note.id !== id
  );

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};
const updateNote = (updatedNote) => {

  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id
      ? updatedNote
      : note
  );

  setNotes(updatedNotes);

  localStorage.setItem(
    "notes",
    JSON.stringify(updatedNotes)
  );
};

  return (
    <BrowserRouter>

      <Sidebar />

      <Navbar />

      <Routes>

        <Route path="/" element={<AllNotes notes={notes} addNote={addNote}
      deleteNote={deleteNote} updateNote={updateNote}/> }/>

       <Route path="/studies" element={<Studies notes={notes} addNote={addNote} 
       deleteNote={deleteNote} updateNote={updateNote}/> }/>

        <Route path="/work" element={<Work notes={notes} addNote={addNote}
        deleteNote={deleteNote} updateNote={updateNote}/> } />

        <Route path="/personal" element={<Personal notes={notes} addNote={addNote} 
        deleteNote={deleteNote} updateNote={updateNote}/> } />

      </Routes>

    </BrowserRouter>
  );
}

export default App;