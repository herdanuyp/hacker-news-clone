function NestedComment({ comment: data }) {
  return (
    <ul>
      <li key={data.id}>
        <p>{data.title}</p>
        <div>
          <small>
            {data.points} by {data.user}
          </small>{' '}
          | <small>{data.time_ago}</small>
        </div>
        {data.content && (
          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
            className='nested-comments-content'
          />
        )}
      </li>

      {data.comments && (
        <div className='nested-comments-user'>
          {data.comments.map(comment => (
            <NestedComment comment={comment} key={comment.id} />
          ))}
        </div>
      )}

      <style jsx>{`
        .nested-comments-user {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          padding-left: 1em;
        }

        .nested-comments-content :global(p) {
          word-wrap: break-word;
        }
      `}</style>
    </ul>
  );
}

export default NestedComment;
