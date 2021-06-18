import React, { useState } from "react";

/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [inputError, setInputError] = useState({
    errorName: "",
    errorText: "",
  });

  const USERNAME_LIMIT = 50;
  const CHARACTER_LIMIT = 500;

  const addComment = async () => {
    if (
      username.length !== 0 &&
      username.length < USERNAME_LIMIT &&
      commentText.length !== 0 &&
      commentText.length < CHARACTER_LIMIT
    ) {
      setInputError({ errorName: "", errorText: "" });

      const result = await fetch(
        `/api/blog-article/${articleName}/add-comment`,
        {
          method: "post",
          body: JSON.stringify({ username, text: commentText }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const body = await result.json();

      setArticleInfo(body);
      setUsername("");
      setCommentText("");
    } else {
      const tempErrors = {
        errorName: "",
        errorText: "",
      };
      if (username.length === 0) {
        tempErrors.errorName = "Please enter a name";
      }
      if (username.length > USERNAME_LIMIT) {
        tempErrors.errorName = `Your name cannot exceed ${USERNAME_LIMIT} characters. Current characters: ${username.length}`;
      }
      if (commentText.length === 0) {
        tempErrors.errorText = "Please enter a comment";
      }
      if (commentText.length > CHARACTER_LIMIT) {
        tempErrors.errorText = `Your comment cannot exceed ${CHARACTER_LIMIT} characters. Current characters: ${commentText.length}`;
      }
      setInputError(tempErrors);
    }
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
        <span className="error">{inputError.errorName}</span>
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
        <span className="error">{inputError.errorText}</span>
      </label>
      <button
        type="submit"
        className="submit-button"
        onClick={() => addComment()}
      >
        Comment
      </button>
    </div>
  );
};

export default AddCommentForm;
