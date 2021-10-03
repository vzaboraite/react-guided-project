export default function CommentsList(props) {
  const { comments, setCommentToEdit } = props;

  return (
    <ul className="comments-list">
      {comments.map((comment, index) => {
        const { author, body } = comment;

        return (
          <li key={index}>
            <h3>{author.username}</h3>
            <p>{body}</p>
            <button onClick={() => setCommentToEdit(comment)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
}
