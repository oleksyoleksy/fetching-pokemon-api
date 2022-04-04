// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import LoadMoreButton from 'comps/LoadMoreButton';
// REPO-SCSS


const Index = ({data, images}) => {

  useEffect(() => {
    console.log(images);
	}, []);

  state.limit = 3;
  useSnapshot(state);

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

        <h1>Pokémons:</h1>

        {
          data.map(i => (
            <p key={uuidv4()}>{i.name}</p>
          ))
        }

        <LoadMoreButton/>

      </div>
    </div>
  );
}

export default Index;