import React, { useState, useEffect } from "react";

/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */

const AddCommentForm = ({ articleName, setArticleInfo, displayFields }) => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [inputError, setInputError] = useState({
    errorName: "",
    errorText: "",
    errorEmail: "",
  });

  /* Reset each state when changing between articles */
  useEffect(() => {
    setUsername("");
    setUserEmail("");
    setCommentText("");
    setInputError({ errorName: "", errorEmail: "", errorText: "" });
  }, [articleName]);

  const USERNAME_LIMIT = 5; /* 50 */
  const USER_EMAIL_LIMIT = 5; /* 100 */
  const COMMENT_TEXT_LIMIT = 5; /* 1000 */

  /* Change into state? */
  const fieldDict = [
    {
      field: username,
      fieldName: "name",
      limit: USERNAME_LIMIT,
      error: "errorName",
      display: displayFields.name,
      dbName: "username",
    },
    {
      field: userEmail,
      fieldName: "email",
      limit: USER_EMAIL_LIMIT,
      error: "errorEmail",
      display: displayFields.email,
      dbName: "email",
    },
    {
      field: commentText,
      fieldName: "comment",
      limit: COMMENT_TEXT_LIMIT,
      error: "errorText",
      display: displayFields.text,
      dbName: "text",
    },
  ];

  const addComment = async () => {
    let errNum = 0;
    const tempErrors = {
      errorName: "",
      errorEmail: "",
      errorText: "",
    };

    /* Simple field validation */
    fieldDict.forEach((fieldElem) => {
      if (fieldElem.field.length === 0 && fieldElem.display) {
        /* Correct grammer for email */
        if (fieldElem.fieldName === "email") {
          tempErrors[
            fieldElem.error
          ] = `Please enter an ${fieldElem.fieldName}`;
        } else {
          tempErrors[fieldElem.error] = `Please enter a ${fieldElem.fieldName}`;
        }
        errNum += 1;
      } else if (
        fieldElem.field.length > fieldElem.limit &&
        fieldElem.display
      ) {
        tempErrors[
          fieldElem.error
        ] = `Your ${fieldElem.fieldName} cannot exceed ${fieldElem.limit} characters. Current characters: ${fieldElem.field.length}`;
        errNum += 1;
      }
    });

    /*
    console.log(tempErrors);
    console.log(errNum);
    console.log({ username, email: userEmail, text: commentText });
    */

    setInputError(tempErrors);

    /* Fix up */

    if (errNum === 0) {
      const jsonBody = {};

      fieldDict.forEach((fieldElem) => {
        if (fieldElem.display) {
          jsonBody[fieldElem.dbName] = fieldElem.field;
        }
      });

      const result = await fetch(`${articleName}`, {
        method: "post",
        body: JSON.stringify(jsonBody),
        headers: { "Content-Type": "application/json" },
      });
      const body = await result.json();

      /* Add loading spinner here  */

      setArticleInfo(body);
      setUsername("");
      setUserEmail("");
      setCommentText("");
    }

    /*
    if (
      username.length !== 0 &&
      username.length < USERNAME_LIMIT &&
      commentText.length !== 0 &&
      commentText.length < TEXT_CHARACTER_LIMIT
    ) {
      setInputError({ errorName: "", errorText: "" });

      const result = await fetch(`${articleName}`, {
        method: "post",
        body: JSON.stringify({ username, text: commentText }),
        headers: { "Content-Type": "application/json" },
      });
      const body = await result.json();

       Add loading spinner here 

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
      } else if (username.length > USERNAME_LIMIT) {
        tempErrors.errorName = `Your name cannot exceed ${USERNAME_LIMIT} characters. Current characters: ${username.length}`;
      }
      if (commentText.length === 0) {
        tempErrors.errorText = "Please enter a comment";
      } else if (commentText.length > TEXT_CHARACTER_LIMIT) {
        tempErrors.errorText = `Your comment cannot exceed ${TEXT_CHARACTER_LIMIT} characters. Current characters: ${commentText.length}`;
      }
      setInputError(tempErrors);
    }
    */
  };

  const nameInputField = (
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
  );
  const emailInputField = (
    <label>
      Email:
      <br />
      <input
        type="text"
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
      />
      <span className="error">{inputError.errorEmail}</span>
    </label>
  );
  const textInputField = (
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
  );

  const inputContent = (
    <>
      {fieldDict.find(({ fieldName }) => fieldName === "name").display && (
        <>{nameInputField}</>
      )}
      {fieldDict.find(({ fieldName }) => fieldName === "email").display && (
        <>{emailInputField}</>
      )}
      {fieldDict.find(({ fieldName }) => fieldName === "comment").display && (
        <>{textInputField}</>
      )}
    </>
  );

  return (
    <div>
      <h3>Add a comment</h3>
      {inputContent}
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
