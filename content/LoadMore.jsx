// NEXT
import { useRouter } from "next/router";
// REACT
// YARN
import {useSnapshot} from 'valtio';
import { v4 as uuidv4 } from 'uuid';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import LoadMoreButton from 'comps/LoadMoreButton';
// REPO-SCSS


const LoadMore = ({data}) => {

  //console.log(data);

  const { query } = useRouter();
  //console.log(query.load_more);
  state.limit = parseInt(query.load_more);

  useSnapshot(state);

  return (
    <div id="loadmore-jsx">
      <div id="loadmore-jsx-content" className="jsx-content">
        
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

export default LoadMore;