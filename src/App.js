import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>
        <PostList />
      </h1>
    </div>
  );
};

export default App;
