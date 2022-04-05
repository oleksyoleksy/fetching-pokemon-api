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


export const getStaticPaths = async () => {

  const call_to_api = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126'
  );
  const fetched_data = await call_to_api.json();
  //console.log(fetched_data.results[0].name); // bulbasaur

  const all_pokemons = fetched_data.results;
  //console.log(all_pokemons[0].name); // bulbasaur
  const all_names = [];
  for (let i = 0; i < all_pokemons.length; i++) {
    all_names[i] = {
      params: {
        load_more: i.toString(),
        name: all_pokemons[i].name
      }
    }
  }
  console.log(all_names);

  return {
    //paths: all_names,
    paths: [
      { params: { load_more: '3', name: 'bulbasaur' } },
      { params: { load_more: '3', name: 'ivysaur' } },
      { params: { load_more: '3', name: 'venusaur' } }
    ],
    fallback: false
  }
};


export const getStaticProps = async (context) => {

  return {
    props: {}
  }
};


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