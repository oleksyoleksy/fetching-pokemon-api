// NEXT
import Link from 'next/link';
// REACT
//import {useEffect} from 'react';
// YARN
import { v4 as uuidv4 } from 'uuid';
import {cx, css} from '@emotion/css';
//import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const Name = ({data}) => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  const onClickFx = () => {
    state.limit = state.limit + 3;
  };

  /* useEffect(() => {
    console.log(data);
	}, []); */


  const ALL = css`
    img {
      width: 200px;
    }
  `;


  return (
    <div id="loadmore-name-jsx">
      <div id="loadmore-name-jsx-content" className={cx(
        "jsx-content",
        ALL,
      )}>
        <h1>{data.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt={data.id} />
        <h2>id: {data.id}</h2>
        <h3>weight: {data.weight}</h3>
        <h3>height: {data.height}</h3>
        {
          data.stats.map(i => (
            <div key={uuidv4()}>
              <h5>{i.stat.name}: {i.base_stat}</h5>
            </div>
          ))
        }

        <div id="loadmorebutton-jsx">
          <div id="loadmorebutton-jsx-content" className="jsx-content">
            <Link href={
              `/${state.limit}`
              //state.limit <= 6 && `/${state.limit + 3}` ||
              //state.limit > 6 && `/9`
            }>
              <button onClick={onClickFx} className="link-like-button">
                go back
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Name;