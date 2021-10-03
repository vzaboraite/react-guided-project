import { useEffect, useState } from "react";

export default function EditComment({ post, posts, setPosts, commentToEdit }) {
  const [commentInputs, setCommentInputs] = useState({
    body: "",
    author: {
      username: "",
    },
  });

  useEffect(() => {
    setCommentInputs({
      body: commentToEdit.body,
      author: {
        username: commentToEdit.author.username,
      },
    });
  }, [commentToEdit]);

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
    const commentToUpdate = {
      ...commentInputs,
      author: {
        ...commentInputs.author,
      },
      postId: post.id,
    };

    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentToUpdate),
    };

    const res = await fetch(
      `http://localhost:3030/comments/${commentToEdit.id}`,
      fetchOptions
    );
    const updatedComment = await res.json();

    let updatedPost = null;
    const updatedPosts = posts.map((post) => {
      if (post.id === updatedComment.postId) {
        const updatedComments = post.comments.map((comment) => {
          if (comment.id === updatedComment.id) {
            return updatedComment;
          } else {
            return comment;
          }
        });
        updatedPost = {
          ...post,
          comments: updatedComments,
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
      <textarea
        id="comment"
        name="comment"
        value={commentInputs.body}
        onChange={handleInputs}
      ></textarea>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={commentInputs.author.username}
        onChange={handleInputs}
      />
      <button type="submit">Update</button>
    </form>
  );
}
