import React from "react";

/* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments</h3>
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
