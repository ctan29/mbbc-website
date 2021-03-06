import React, { useState, useEffect, useRef } from "react";

/* eslint react/prop-types: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */

// Add text comment, confirmation

const AddCommentForm = ({
  postRoute,
  setArticleInfo,
  displayFields,
  buttonText,
  confirmText,
}) => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const [inputError, setInputError] = useState({
    errorName: "",
    errorText: "",
    errorEmail: "",
  });

  const commentLoader = useRef();
  const confirmMessage = useRef();

  /* Reset each state when changing between articles */
  useEffect(() => {
    setUsername("");
    setUserEmail("");
    setCommentText("");
    setInputError({ errorName: "", errorEmail: "", errorText: "" });

    commentLoader.current.className = "";
    confirmMessage.current.className = "display-none";
  }, [postRoute]);

  const USERNAME_LIMIT = 50; /* 50 */
  const USER_EMAIL_LIMIT = 100; /* 100 */
  const COMMENT_TEXT_LIMIT = 1000; /* 1000 */

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
    confirmMessage.current.className = "display-none";

    /* Simple field validation */
    fieldDict.forEach((fieldElem) => {
      if (fieldElem.field.length === 0 && fieldElem.display) {
        /* Correct grammar for email */
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

    setInputError(tempErrors);

    /* Fix up */

    if (errNum === 0) {
      const jsonBody = {};

      fieldDict.forEach((fieldElem) => {
        if (fieldElem.display) {
          jsonBody[fieldElem.dbName] = fieldElem.field;
        }
      });

      commentLoader.current.className = "lds-dual-ring submit-loader";

      const result = await fetch(`${postRoute}`, {
        method: "post",
        body: JSON.stringify(jsonBody),
        headers: { "Content-Type": "application/json" },
      });
      const body = await result.json();

      if (setArticleInfo) {
        setArticleInfo(body);
      }
      setUsername("");
      setUserEmail("");
      setCommentText("");

      commentLoader.current.className = "";
      confirmMessage.current.className = "confirm-box";
    }
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
      {inputContent}

      <div className="button-wrapper">
        <button
          type="submit"
          className="submit-button"
          onClick={() => addComment()}
        >
          {buttonText}
        </button>
        <div className="lds-dual-ring submit-loader" ref={commentLoader} />
        <div className="confirm-box" ref={confirmMessage}>
          <p>&#10003; {confirmText}</p>
        </div>
      </div>
    </div>
  );
};

export default AddCommentForm;
