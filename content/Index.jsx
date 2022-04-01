// NEXT
import Link from 'next/link';
// REACT
// YARN
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const Index = ({data}) => {

  useSnapshot(state);

  const onClickFx = () => {
    state.limit = state.limit + 3;
  };

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

        <h1>Pokémons:</h1>

        {
          data.map(i => (
            <p key={uuidv4()}>{i.name}</p>
          ))
        }

        <Link href={`/${state.limit + 3}`}>
          <button onClick={onClickFx} className="link-like-button">load more</button>
        </Link>

      </div>
    </div>
  );
}

export default Index;
