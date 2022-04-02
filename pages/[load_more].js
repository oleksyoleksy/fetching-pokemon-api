// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import LoadMore from 'content/LoadMore';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS


const LoadMorePage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <LoadMore/>
    </>
  );
}

export default LoadMorePage;