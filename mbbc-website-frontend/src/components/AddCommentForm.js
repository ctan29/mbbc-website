import React, { useState } from "react";

/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/blog-article/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: { "Content-Type": "application/json" },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div>
      <h3>Add a comment</h3>
      <label>
        Name:
        <br />
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
      </label>
      <label>
        Comment:
        <br />
        <textarea
          rows="5"
          cols="50"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <br />
      </label>
      <button
        type="submit"
        className="submit-button"
        onClick={() => addComment()}
      >
        Add comment
      </button>
    </div>
  );
};

export default AddCommentForm;
