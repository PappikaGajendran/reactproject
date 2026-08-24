import { useEffect, useState } from "react";

function NotesEditor({
  addNote,
  updateNote,
  category,
  editingNote,
  cancelEdit
}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {

    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle("");
      setContent("");
    }

  }, [editingNote]);

  const handleSave = () => {

    if (!title.trim() || !content.trim()) {
      alert("Please enter title and content");
      return;
    }

    if (editingNote) {

      updateNote({
        ...editingNote,
        title: title,
        content: content,
      });

      cancelEdit();

    } else {

      const newNote = {
        id: Date.now(),
        title: title,
        content: content,
        category: category,
      };

      addNote(newNote);

      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm mb-6">

      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4 outline-none"
      />

      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-3 rounded-lg h-32 outline-none"
      />

      <div className="flex gap-3 mt-4">

        <button
          onClick={handleSave}
          className="bg-slate-900 text-white px-5 py-2 rounded-lg hover:bg-slate-700"
        >
          {editingNote ? "Update Note" : "Save Note"}
        </button>

        {editingNote && (
          <button
            onClick={cancelEdit}
            className="bg-gray-300 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>
        )}

      </div>

    </div>
  );
}

export default NotesEditor;