import React, { useState } from "react";

function Editor({
  query,
  setQuery,
  error,
  list,
  setList,
  isEditing,
  setIsEditing,
}) {
  const [edited, setEdited] = useState("");
  //   console.log(list);

  function editTask(e) {
    e.preventDefault();
    console.log(edited);
    setList({
      ...list, // Copy the old fields
      query: edited, // But override this one
    });
    console.log(list);
    setIsEditing(false);
  }

  return (
    <form onSubmit={editTask} className="title-editor">
      <input
        type="text"
        onChange={(e) => setEdited(e.target.value)}
        placeholder="Escriba el titulo"
      />
    </form>
  );
}

export default Editor;
