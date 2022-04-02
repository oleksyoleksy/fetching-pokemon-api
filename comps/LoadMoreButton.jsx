// NEXT
import Link from 'next/link';
// REACT
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const LoadMoreButton = () => {

  const onClickFx = () => {
    state.limit = state.limit + 3;
  };

  useSnapshot(state);

  return (
    <div id="loadmorebutton-jsx">
      <div id="loadmorebutton-jsx-content" className="jsx-content">
        <Link href={`/${state.limit + 3}`}>
          <button onClick={onClickFx} className="link-like-button">
            load more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoadMoreButton;