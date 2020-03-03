import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../components/Layout';
import Error from './_error';
import Story from '../components/Story';

const Index = ({ errorCode, news, page }) => {
  return (
    <Layout title='Home | Hacker News Clone'>
      <div id='news'>
        <Error statusCode={errorCode} />
        <Story news={news} />
        <div>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, res, query }) => {
  let page = Number(query.page) || 1;
  const response = await fetch(
    `http://node-hnapi.herokuapp.com/news?page=${page}`
  );
  const errorCode = response.status > 200 ? response.status : false;
  const data = await response.json();

  return { errorCode, news: data, page };
};
export default Index;
