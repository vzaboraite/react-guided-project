import { useState } from "react";

export default function CreateComment({ post, posts, setPosts }) {
  const [commentInputs, setCommentInputs] = useState({
    body: "",
    author: {
      username: "",
    },
  });

  const handleInputs = (event) => {
    const inputName = event.target.name;
    const targetValue = event.target.value;

    if (inputName === "comment") {
      setCommentInputs({
        ...commentInputs,
        body: targetValue,
      });
    } else {
      setCommentInputs({
        ...commentInputs,
        author: {
          ...commentInputs.author,
          [inputName]: targetValue,
        },
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentToCreate = {
      ...commentInputs,
      author: {
        ...commentInputs.author,
      },
      postId: post.id,
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentToCreate),
    };

    const res = await fetch("http://localhost:3030/comments", fetchOptions);
    const newComment = await res.json();

    let updatedPost = null;
    const updatedPosts = posts.map((post) => {
      if (post.id === newComment.postId) {
        updatedPost = {
          ...post,
          comments: [...post.comments, newComment],
        };
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment" onChange={handleInputs}></textarea>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleInputs}
      />
      <button type="submit">Create</button>
    </form>
  );
}
