// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import NotFound from 'content/404';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS


const NotFoundPage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <NotFound/>
    </>
  );
}

export default NotFoundPage;