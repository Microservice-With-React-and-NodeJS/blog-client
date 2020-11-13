import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    // console.log(res.data);

    setPosts(res.data);
  };
  //to run fetchpost func only onece when it is first displayed: useeffect. it takes two argument, a func and  an empty array, this tells react to only run this func one time,
  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts);
  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
        // we are generating list of element so we need key property here which is the id of ech post
      >
        <div className="body">
          <h3>{post.title}</h3>
          <hr />
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  //object.vaules is a built in  js function that gives back an array of all the  values insideof the object

  return (
    <div>
      <h3>Posts</h3>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
      </div>
    </div>
  );
};
export default PostList;
