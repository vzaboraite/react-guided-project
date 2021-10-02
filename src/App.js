import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import PostsList from "./components/PostsList";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("http://localhost:3030/posts");

      const posts = await res.json();

      setPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <>
      <CreatePost posts={posts} setPosts={setPosts} />
      {posts && <PostsList posts={posts} />}
    </>
  );
}
