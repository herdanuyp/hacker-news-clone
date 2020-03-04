import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';
import CommentList from '../../components/CommentList';

export default function Comment({ comments }) {
  return (
    <Layout title='Comments | Hacker News'>
      <CommentList comments={comments} />
    </Layout>
  );
}

Comment.getInitialProps = async ({ req, res, query }) => {
  const commentResponse = await fetch(
    `https://api.hackerwebapp.com/item/${query.id}`
  );

  const data = await commentResponse.json();

  return {
    comments: [].concat(data)
  };
};
