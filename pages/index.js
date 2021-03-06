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

  const call_to_api = await fetch(`${url}${qs}`);
  const fetched_data = await call_to_api.json();
  //console.log(fetched_data.results);
  const data = fetched_data.results;
  
  //console.log(data.length);
  const images = [];
  for (let i = 0; i < data.length; i++) {
    const image_number = i + 1;
    const image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${image_number}.png`;
    images.push(image_url);
  }
  //console.log(images);

  const pokemons_array = [];
  for (let i = 0; i < data.length; i++) {
    pokemons_array.push({name: `${data[i].name}`, url: `${images[i]}`});
  }
  //console.log(pokemons_array);

  return {
    props: {pokemons_array}
  }
};


const IndexPage = ({pokemons_array}) => {

  useSnapshot(state);

  return (
    <>
      <MetaTag/>
      <Head>
        <title>{state.width}px</title>
      </Head>
      <Index pokemons_array={pokemons_array}/>
    </>
  );
}

export default IndexPage;