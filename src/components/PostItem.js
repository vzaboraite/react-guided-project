import { useState } from "react";
import CommentsList from "./CommentsList";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment";

export default function PostItem(props) {
  const { post } = props;

  const [hideCreateForm, setHideCreateForm] = useState(true);
  const [commentToEdit, setCommentToEdit] = useState(null);

  const { body, image, user, comments } = post;

  return (
    <li>
      <div className="frame">
        <img src={image} alt={body} />
      </div>
      <div>
        <p>{body}</p>
        <p>
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
      </div>
      <section>
        <h2>Comments</h2>
        <CommentsList comments={comments} />
        {hideCreateForm && <CreateComment post={post} />}
        {commentToEdit && <EditComment post={post} />}
      </section>
    </li>
  );
}
