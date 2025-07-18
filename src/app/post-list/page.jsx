import React from "react";

const PostList = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const comments = await res.json();
  return (
    <div>
      <h3>This is post list</h3>

      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <h2>{c.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
