// NEXT
import Link from 'next/link';
// REACT
// YARN
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import LoadMoreButton from 'comps/LoadMoreButton';
// REPO-SCSS


const Index = ({pokemons_array}) => {

  const titleCaseFx = (arg) => {
    arg = arg.toLowerCase().split(' ');
    for (let i = 0; i < arg.length; i++) {
      arg[i] = arg[i].charAt(0).toUpperCase() + arg[i].slice(1); 
    }
    return arg.join(' ');
  };

  state.limit = 3;
  useSnapshot(state);

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

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

export default Index;