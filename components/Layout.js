import Router from 'next/router';

import Head from './Head';

const Layout = ({ children, title }) => (
  <div className='container'>
    <Head title={title} />

    <div className='back-wrapper'>
      <button onClick={() => Router.back()}>Go Back</button>
    </div>

    <div className='header'>
      <div>
        <img
          src='https://news.ycombinator.com/y18.gif'
          alt='y-cominator-logo'
          rel='noopener,noreferrer'
        />
      </div>
      <span>Hacker News</span>
    </div>

    <main>{children}</main>

    <footer>
      <a
        href='https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by <img src='/zeit.svg' alt='ZEIT Logo' />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 85%;
        margin: auto;
      }

      .back-wrapper {
        position: relative;
        height: 3em;
        width: 100%;
        z-index: 2;
      }

      button {
        outline: 0;
        border: none;
        background-color: white;
        box-shadow: 0px 4px 17px -2px rgba(0, 0, 0, 0.75);
        border-radius: 5px;
        width: 5em;
        text-align: center;
        padding: 5px;
        position: fixed;
        top: 10px;
        cursor: pointer;
      }

      .header {
        width: 100%;
        background-color: rgb(255, 102, 0);
      }

      .header > div {
        margin-right: 10px;
      }

      .header > * {
        display: inline-block;
        vertical-align: middle;
        padding: 4px;
      }

      .header > div > img {
        border: 1px solid #fff;
        display: block;
        margin: auto;
        height: 100%;
      }

      main {
        // padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Layout;
