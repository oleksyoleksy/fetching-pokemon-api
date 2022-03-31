// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import SubPage from 'content/SubPage';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS

const SubPagePage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <SubPage/>
    </>
  );
}

export default SubPagePage;
