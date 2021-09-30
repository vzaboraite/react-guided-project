import PostItem from "./PostItem";

export default function PostsList(props) {
  const { posts } = props;

  return (
    <ul className="posts-list">
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </ul>
  );
}
