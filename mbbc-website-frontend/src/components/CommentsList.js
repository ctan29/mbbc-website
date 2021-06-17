import React from "react";

/* eslint react/prop-types: 0 */
/* eslint react/no-array-index-key: 0 */

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments</h3>
    {comments.map((comment, key) => (
      <div key={key}>
        <h4>{comment.username}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
