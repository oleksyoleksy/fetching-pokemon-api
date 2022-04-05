// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
import {cx, css} from '@emotion/css';
import {math} from 'polished';
import {isMobile} from 'react-device-detect';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import Header from 'layout/Header';
// REPO-SCSS


const Layout = ({children}) => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);





  useEffect(() => {

    // ==========================================================
    // reading viewport's width and height (excluding scrollbars)
    // and assigning those values to valtio-state dynamically
    // after every and any viewport's resize

    // after browser is reloaded:
    state.width = document.documentElement.clientWidth;
    state.height = document.documentElement.clientHeight;

    // after browser is resized:
    const resizeWatcher = () => {
      state.width = document.documentElement.clientWidth;
      state.height = document.documentElement.clientHeight;
    };

    window.addEventListener('resize', resizeWatcher);

    // reading viewport's width and height (excluding scrollbars)
    // and assigning those values to valtio-state dynamically
    // after every and any viewport's resize
    // ==========================================================

	}, []);


// width: ${math(`${state.width} - 20`)}px;


  const ALL = css`
    header {
      z-index: 1;
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      padding-top: 20px;
      background-color: #ffff00;
      padding-bottom: 20px;
      nav {
        position: sticky;
        width: 600px;
        margin-left: ${math(`(${state.width} - 600) / 2`)}px;
      }
    }
    main {
      margin-top: 100px;
      position: relative;
      width: 600px;
      margin-left: ${math(`(${state.width} - 600) / 2`)}px;
      .pokemons-grid {
        display: grid;
        grid-template-columns: repeat(3, 200px);
        .one-single-pokemon {
          text-align: center;
          img {
            width: 200px;
          }
          a {
            text-align: center;
          }
        }
      }
    }
  `;

  const MOB = css`
    header {
      nav {
        width: 100vw;
        margin-left: 10px;
        a {
          font-weight: 500;
          font-size: 24px;
        }
      }
    }
    main {
      width: 100vw;
      margin-left: 10px;
      .pokemons-grid {
        display: grid;
        grid-template-columns: repeat(3, 32vw);
        justify-items: center;
        .one-single-pokemon {
          text-align: center;
          img {
            width: 25vw;
          }
          a {
            font-weight: 500;
            font-size: 18px;
          }
        }
      }
    }
  `;





  return (
    <div lang="pl" id="header-main-footer" className={cx(
      ALL,
      {[MOB]: isMobile === true},
    )}>
      <Header/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;