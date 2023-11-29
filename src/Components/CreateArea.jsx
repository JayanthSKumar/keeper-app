import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleNoteChange(event) {
    setContent(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleNoteChange}
          value={content}
        />
        <button
          type="submit"
          onClick={() => {
            props.onclick(title, content);
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;