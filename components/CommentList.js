import NestedComment from './NestedComment';

function CommentList({ comments }) {
  return (
    <ul>
      {comments &&
        comments.map(comment => (
          <NestedComment comment={comment} key={comment.id} />
        ))}
    </ul>
  );
}

export default CommentList;
