import React from "react";

/* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */

const CommentsList = ({ comments }) => (
  <>
    <ul className="comments-list">
      {comments.map((comment, key) => (
        <li key={key}>
          <h4 className="comment-username">{comment.username}</h4>
          <p className="comment-text">{comment.text}</p>
        </li>
      ))}
    </ul>
  </>
);

export default CommentsList;

/* Old untested comment error handling (error handling moved to blog article page)
const CommentsList = ({ comments }) => {
  let commentsElement = "";

  try {
    commentsElement = comments.map((comment, key) => (
      <li key={key}>
        <h4 className="comment-username">{comment.username}</h4>
        <p className="comment-text">{comment.text}</p>
      </li>
    ));
  } catch (err) {
    commentsElement = (
      <h4 className="comment-username">Unable to retrieve comments</h4>
    );
  }

  return (
    <>
      <h3>Comments</h3>
      <ul className="comments-list">{commentsElement}</ul>
    </>
  );
};
*/
