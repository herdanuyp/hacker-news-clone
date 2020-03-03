import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

export default function Comment({ comments }) {
  console.log(comments);
  return (
    <Layout title='Comment | Hacker News'>
      <ul>
        {comments &&
          comments.map(comment => (
            <React.Fragment>
              <li key={comment.id}>
                <p>{comment.title}</p>
                <div>
                  <small>
                    {comment.points} by {comment.user}
                  </small>{' '}
                  | <small>{comment.time_ago}</small>
                </div>
              </li>

              {comment.comments &&
                comment.comments.map(comment => (
                  <React.Fragment>
                    <div className='nested-comments-user'>{comment.user}</div>
                    <div
                      key={comment.id}
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                      className='nested-comments'
                    />
                  </React.Fragment>
                ))}
            </React.Fragment>
          ))}
      </ul>
      <style jsx>{`
        .nested-comments-user {
          font-size: 1em;
          font-weight: 700;
          padding-left: 10px;
        }

        .nested-comments {
          border-left: 1px solid grey;
          padding-left: 1em;
        }

        .nested-comments p {
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  );
}

Comment.getInitialProps = async ({ req, res, query }) => {
  const commentResponse = await fetch(
    `https://node-hnapi.herokuapp.com/item/${query.id}`
  );

  const data = await commentResponse.json();

  return {
    comments: [].concat(data)
  };
};
