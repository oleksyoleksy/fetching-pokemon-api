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


export const getStaticPaths = async () => {

  const call_to_api = await fetch(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126'
  );
  const fetched_data = await call_to_api.json();
  //console.log(fetched_data.results.length); // 1126

  const dynamic_urls = fetched_data.results;
  //console.log(dynamic_urls.length); // 1126
  const all_dynamic_urls = [];
  for (let i = 0; i <= dynamic_urls.length; i++) {
    //all_dynamic_urls[i] = i + 1; // 1, 2, 3, ...1126
    all_dynamic_urls[i] = { params: { load_more: i.toString() } }
  }
  //console.log(all_dynamic_urls);

  return {
    /* paths: [
      { params: { load_more: '6' } },
      { params: { load_more: '9' } },
      { params: { load_more: '12' } }
    ], */
    paths: all_dynamic_urls,
    fallback: false
  }
};


export const getStaticProps = async ({params}) => {

  console.log(params.load_more); // 6 9 12

  const url = 'https://pokeapi.co/api/v2/pokemon';
  const qs = `?limit=${params.load_more}&offset=${state.offset}`;

  const call_to_api = await fetch(`${url}${qs}`);
  const fetched_data = await call_to_api.json();
  //console.log(fetched_data.results);
  const data = fetched_data.results;

  const images = [];
  for (let i = 0; i < data.length; i++) {
    const image_number = i + 1;
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${image_number}.png`;
    images.push(image_url);
  }

  const pokemons_array = [];
  for (let i = 0; i < data.length; i++) {
    pokemons_array.push({name: `${data[i].name}`, url: `${images[i]}`});
  }

  return {
    props: {pokemons_array}
  }
};


const LoadMorePage = ({pokemons_array}) => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <LoadMore pokemons_array={pokemons_array}/>
    </>
  );
}

export default LoadMorePage;