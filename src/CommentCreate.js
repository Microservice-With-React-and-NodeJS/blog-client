import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });

    setContent(""); //to make the field blank again
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>
            <h6>New Comment</h6>
          </label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
