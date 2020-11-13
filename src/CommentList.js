//fetch data
//set data on state
//map over that state
//produce a listof comments
//display comments to the user
import React, { useState, useEffect } from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map(comment => {
    //check the status of comment, change it according to the status type of the received event. if rejected -> dont show the comment, show something else
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending") {
      content = " ⏳ This Comment awaits admin approval";
    }

    if (comment.status === "rejected") {
      content = " ☠️ This Comment is rejected due to inappropriate conetent";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <p>{renderedComments.length} comments</p>
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
