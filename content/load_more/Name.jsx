// NEXT
import Link from 'next/link';
// REACT
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


  const ALL = css`
    img {
      width: 400px;
    }
    h2 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .all-stats {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
    }
    .stat-num {
      font-weight: 700;
      padding-right: 5px;
      padding-left: 5px;
      margin-right: 1px;
      background-color: #ffd900;
    }
  `;


const titleCaseFx = (arg) => {
  arg = arg.toLowerCase().split(' ');
  for (let i = 0; i < arg.length; i++) {
    arg[i] = arg[i].charAt(0).toUpperCase() + arg[i].slice(1); 
  }
  return arg.join(' ');
};


  const img_api = 'https://raw.githubusercontent.com/PokeAPI';
  const img_url = 'sprites/master/sprites/pokemon/other/home';


  let all_stats = 0;
  const stats_arr = data.stats.map(i => {
    all_stats ++;
    return (
      <span key={uuidv4()}>
        {i.stat.name}:&nbsp;
        <span className="stat-num">{i.base_stat}</span>
        {all_stats < data.stats.length ? `; ` : `. `}
        {all_stats === 3 && <br />}
        {all_stats === 5 && <br />}
      </span>
    )
  });


  return (
    <div id="loadmore-name-jsx">
      <div id="loadmore-name-jsx-content" className={cx(
        "jsx-content",
        ALL,
      )}>
        <h1>{titleCaseFx(data.name)}</h1>
        <img src={`${img_api}/${img_url}/${data.id}.png`} alt={data.id} />

        <h2>params:</h2>
        <p className="all-stats">
          id: <span className="stat-num">{data.id}</span>; 
          weight: <span className="stat-num">{data.weight}</span>; 
          height: <span className="stat-num">{data.height}</span>.
        </p>
        <h2>stats:</h2>
        <p className="all-stats">{stats_arr}</p>

        <div id="loadmorebutton-jsx">
          <div id="loadmorebutton-jsx-content" className="jsx-content">
            <Link href={`/${state.limit}`}>
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