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

  const titleCaseFx = (arg) => {
    arg = arg.toLowerCase().split(' ');
    for (let i = 0; i < arg.length; i++) {
      arg[i] = arg[i].charAt(0).toUpperCase() + arg[i].slice(1); 
    }
    return arg.join(' ');
  };

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
                <Link href={`/${state.limit}/${i.name}`}>
                <a>{titleCaseFx(i.name)}</a>
                </Link>
              </div>
            ))
          }
        </div>

        {
          state.limit < 9 &&
          <LoadMoreButton/>
        }

      </div>
    </div>
  );
}

export default LoadMore;