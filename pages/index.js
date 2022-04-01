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


export const getStaticProps = async () => {

  const url = 'https://pokeapi.co/api/v2/pokemon';
  const qs = `?limit=${state.limit}&offset=${state.offset}`;

  //const call_to_api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');
  const call_to_api = await fetch(`${url}${qs}`);
  const fetched_data = await call_to_api.json();
  console.log(fetched_data.results);
  const data = fetched_data.results;

  return {
    props: {data}
  }
};


const IndexPage = ({data}) => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <Index data={data}/>
    </>
  );
}

export default IndexPage;
