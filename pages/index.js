// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import Index from 'content/Index';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS

const IndexPage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <Index/>
    </>
  );
}

export default IndexPage;
