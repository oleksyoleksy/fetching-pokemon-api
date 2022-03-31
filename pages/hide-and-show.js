// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import HideShow from 'content/HideShow';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS

const HideShowPage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <HideShow/>
    </>
  );
}

export default HideShowPage;
