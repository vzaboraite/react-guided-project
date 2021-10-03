import PostItem from "./PostItem";

export default function PostsList(props) {
  const { posts, setPosts } = props;

  return (
    <ul className="posts-list">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} posts={posts} setPosts={setPosts} />
      ))}
    </ul>
  );
}
