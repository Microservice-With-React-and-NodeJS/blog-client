//fetch data
//set data on state
//map over that state
//produce a listof comments
//display comments to the user
import React, { useState, useEffect } from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <div>
      <p>{renderedComments.length} comments</p>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
