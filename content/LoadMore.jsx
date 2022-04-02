// NEXT
import { useRouter } from "next/router";
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const LoadMore = () => {

  const { query } = useRouter();
  //console.log(query.load_more);
  state.limit = parseInt(query.load_more);

  useSnapshot(state);

  return (
    <div id="loadmore-jsx">
      <div id="loadmore-jsx-content" className="jsx-content">
        <p>will load more here...</p>
      </div>
    </div>
  );
}

export default LoadMore;