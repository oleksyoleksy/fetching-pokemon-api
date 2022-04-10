// NEXT
import { useRouter } from "next/router";
import Link from 'next/link';
// REACT
// YARN
import {isMobile} from 'react-device-detect';
import {cx, css} from '@emotion/css';
import {useSnapshot} from 'valtio';
import { v4 as uuidv4 } from 'uuid';
// REPO-JS
import {
  desktop_small, desktop_medium, desktop_large,
  laptop_small, laptop_medium, laptop_large,
  tablet_small, tablet_medium, tablet_large,
  phone_small, phone_medium, phone_large,
} from 'breakpoints.js';
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

  const ALL = css`
    a {
      font-size: 22px;
    }
  `;
  const MAX = css``;
  const DESKTOP = css``;
  const LAPTOP = css``;
  const TABLET = css``;
  const PHONE = css`
    h1 {
      text-align: center;
    }
    button {
      margin: 0 auto;
    }
  `;
  const PHONE_LARGE = css``;
  const PHONE_MEDIUM = css``;
  const PHONE_SMALL = css``;

  return (
    <div id="loadmore-jsx">
      <div id="loadmore-jsx-content" className={cx(
        "jsx-content",
        ALL,
        {[MAX]:            state.width >  desktop_large},
        {[DESKTOP]:        state.width >  laptop_large   && state.width <= desktop_large},
        {[LAPTOP]:         state.width >  tablet_large   && state.width <= laptop_large},
        {[TABLET]:         state.width >  phone_large    && state.width <= tablet_large},
        {[PHONE]:          state.width <= phone_large && isMobile === true},
        {[PHONE_LARGE]:    state.width >  phone_medium   && state.width <= phone_large},
        {[PHONE_MEDIUM]:   state.width >  phone_small    && state.width <= phone_medium},
        {[PHONE_SMALL]:    state.width <= phone_small},
        //{[MOB]: isMobile === true},
      )}>
        
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