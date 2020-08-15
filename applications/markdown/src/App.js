import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const toolbar = [
    {
      name: "save",
      action: function (editor) {
        alert(editor.value());
      },
      className: "fa fa-save",
      title: "save",
    },
    "|",
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "|",
    "preview",
    "side-by-side",
    "fullscreen",
    "|",
    "guide",
  ];
  const handleDrop = (data, e) => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      alert("FileName : " + file.name);
    }
  };

  return (
    <SimpleMDE
      onChange={(e) => setMarkdown(e)}
      options={{ toolbar: toolbar }}
      events={{ drop: handleDrop }}
    />
  );
}

export default App;
