// NEXT
import Head from 'next/head';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import Name from 'content/load_more/Name';
import MetaTag from 'comps/MetaTag';
// REPO-SCSS


export const getStaticPaths = async () => {

  const call_to_api = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126'
  );
  const fetched_data = await call_to_api.json();

  // reminder #1:
  //console.log(fetched_data.results); // bulbasaur

  const all_pokemons = fetched_data.results;
  //console.log(all_pokemons); // [ { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },

  const all_dynamic_urls = [];
  for (let i = 0; i <= all_pokemons.length; i++) {
    all_dynamic_urls[i] = { params: { load_more: i.toString() } }
  }
  // reminder #2:
  //console.log(all_dynamic_urls); // [ { params: { load_more: '0' } },

  const pages_x_names = [];
  for (let i = 0; i < all_dynamic_urls.length; i++) {
    for (let j = 0; j < all_pokemons.length; j++) {
      pages_x_names.push({
        params: {load_more: `${i}`, name: `${all_pokemons[j].name}`
      }});
    }
  }
  //console.log(pages_x_names);

  return {
    paths: pages_x_names,
    /* paths: [
      { params: { load_more: '3', name: 'bulbasaur' } },
      { params: { load_more: '6', name: 'bulbasaur' } },
      { params: { load_more: '3', name: 'ivysaur' } },
      { params: { load_more: '3', name: 'venusaur' } }
    ], */
    fallback: false
  }
};


export const getStaticProps = async ({params}) => {

  //console.log(context); // params: { load_more: '3', name: 'bulbasaur' },
  const name = params.name;
  //console.log(name);

  const call_to_api = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const fetched_data = await call_to_api.json();
  //console.log(fetched_data);
  //const data = fetched_data.results;

  return {
    props: {fetched_data}
  }
};


const NamePage = ({fetched_data}) => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <Name data={fetched_data}/>
    </>
  );
}

export default NamePage;