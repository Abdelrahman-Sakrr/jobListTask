import React, { useState } from "react";

export default function SearchBar({ onTagChange }) {
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      tagInput.trim() !== "" &&
      !tags.includes(tagInput)
    ) {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      onTagChange(newTags);
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    onTagChange(updatedTags);
  };

  return (
    <div className="bg-white shadow-md text-black rounded-md w-full flex flex-wrap items-center gap-2 p-3">
      {tags.map((tag, index) => (
        <>
          <div className="flex items-center" key={index}>
            <div
              key={index}
              className="bg-primary text-secondry font-bold rounded-md px-3 py-1 flex items-center gap-2"
            >
              <span>{tag}</span>
            </div>
            <span
              onClick={() => removeTag(tag)}
              className="bg-secondry text-primary font-bold p-1 rounded-e-lg cursor-pointer"
            >
              ✕
            </span>
          </div>
        </>
      ))}
      <input
        type="text"
        placeholder="Search By Tags ..."
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="outline-none flex-1 p-2"
      />
      <button
        onClick={() => {
          setTags([]);
          onTagChange([]);
        }}
        className="text-base font-bold text-alternative"
      >
        Clear
      </button>
    </div>
  );
}
