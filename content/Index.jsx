// NEXT
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

  state.limit = 3;
  useSnapshot(state);

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

        <h1>Pokémons:</h1>

        <div className="pokemons-grid">
          {
            pokemons_array.map(i => (
              <div key={uuidv4()}>
                <img src={i.url} alt="" />
                <p>{i.name}</p>
              </div>
            ))
          }
        </div>

        <LoadMoreButton/>

      </div>
    </div>
  );
}

export default Index;