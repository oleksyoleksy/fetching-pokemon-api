// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
//import Name from 'content/Name';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS


const NamePage = () => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <h1>single Pokemon will go here...</h1>
      {/* <Name/> */}
    </>
  );
}

export default NamePage;