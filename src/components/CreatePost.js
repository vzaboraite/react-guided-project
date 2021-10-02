import { useState } from "react";

export default function CreatePost({ posts, setPosts }) {
  const [postInputs, setPostInputs] = useState({
    body: "",
    image: "",
    user: {
      firstName: "",
      lastName: "",
    },
  });

  const handleInputs = (event) => {
    const inputName = event.target.name;
    const targetValue = event.target.value;

    if (inputName === "description") {
      setPostInputs({
        ...postInputs,
        body: targetValue,
      });
    }
    if (inputName === "firstName" || inputName === "lastName") {
      setPostInputs({
        ...postInputs,
        user: {
          ...postInputs.user,
          [inputName]: targetValue,
        },
      });
    }
    if (inputName === "image") {
      setPostInputs({
        ...postInputs,
        [inputName]: targetValue,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postToCreate = {
      ...postInputs,
      user: {
        ...postInputs.user,
      },
      comments: [],
    };

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postToCreate),
    };

    const res = await fetch("http://localhost:3030/posts", fetchOptions);
    const newPost = await res.json();

    setPosts([...posts, newPost]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        onChange={handleInputs}
      />
      <label for="image">Image:</label>
      <input type="url" id="image" name="image" onChange={handleInputs} />
      <label for="firstName">First name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleInputs}
      />
      <label for="lastName">Last name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleInputs}
      />
      <button type="submit">Post</button>
    </form>
  );
}
