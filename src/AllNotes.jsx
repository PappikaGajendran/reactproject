import { useState } from "react";
import NotesEditor from "./NotesEditor";

function AllNotes({ notes, addNote, deleteNote, updateNote }) {

  const [editingNote, setEditingNote] = useState(null);

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const cancelEdit = () => {
    setEditingNote(null);
  };

  return (
    <div className="ml-64 pt-16 min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        All Notes
      </h1>

      <NotesEditor
        addNote={addNote}
        updateNote={updateNote}
        category="All"
        editingNote={editingNote}
        cancelEdit={cancelEdit}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {notes.map((note) => (

          <div
            key={note.id}
            className="bg-white p-5 rounded-xl shadow-sm"
          >

            <h2 className="text-xl font-semibold">
              {note.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {note.content}
            </p>

            <div className="flex gap-3 mt-4">

              <button
                onClick={() => handleEdit(note)}
                className="text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AllNotes;