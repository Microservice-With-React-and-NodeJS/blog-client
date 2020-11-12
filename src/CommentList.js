//fetch data
//set data on state
//map over that state
//produce a listof comments
//display comments to the user
import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
