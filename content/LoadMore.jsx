// NEXT
import { useRouter } from "next/router";
import Link from 'next/link';
// REACT
// YARN
import {useSnapshot} from 'valtio';
import { v4 as uuidv4 } from 'uuid';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import LoadMoreButton from 'comps/LoadMoreButton';
// REPO-SCSS


const LoadMore = ({pokemons_array}) => {

  const { query } = useRouter();
  //console.log(query.load_more);
  state.limit = parseInt(query.load_more);

  useSnapshot(state);

  return (
    <div id="loadmore-jsx">
      <div id="loadmore-jsx-content" className="jsx-content">
        
        <h1>Pokémons:</h1>

        <div className="pokemons-grid">
          {
            pokemons_array.map(i => (
              <div className="one-single-pokemon" key={uuidv4()}>
                <img src={i.url} alt="" />
                <Link href="/">
                  <a>{i.name}</a>
                </Link>
              </div>
            ))
          }
        </div>

        <LoadMoreButton/>
      </div>
    </div>
  );
}

export default LoadMore;