// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
import {cx, css} from '@emotion/css';
import {math} from 'polished';
import {isMobile} from 'react-device-detect';
// REPO-JS
import {
  desktop_small, desktop_medium, desktop_large,
  laptop_small, laptop_medium, laptop_large,
  tablet_small, tablet_medium, tablet_large,
  phone_small, phone_medium, phone_large,
} from 'breakpoints.js';
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
      //background-color: #ffff00;
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
      //background-color: #ffff0034;
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
            text-decoration: none;
            color: rgb(0, 136, 255);
          }
          a:hover {
            color: rgb(0, 111, 207);
            text-decoration: underline rgb(78, 172, 255);
          }
        }
      }
      .link-like-button {
        margin-top: 25px;
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        width: 200px;
        height: 50px;
        border: 0px;
        border-radius: 25px;
        background-color: rgb(0, 152, 33);
        margin-bottom: 50px;
      }
      .link-like-button:hover {
        cursor: pointer;
        background-color: rgb(3, 187, 43);
      }
    }
  `;

  const PHONE = css`
    header {
      nav {
        width: 100vw;
        margin-left: 10px;
        a {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
    main {
      width: 100vw;
      margin-left: 0px;
      background-color: white;
      h1 {
        text-align: center;
      }
      .pokemons-grid {
        display: grid;
        grid-template-columns: repeat(3, 32vw);
        justify-items: center;
        .one-single-pokemon {
          text-align: center;
          img {
            width: 30vw;
          }
          a {
            font-weight: 600;
            font-size: 14px;
            color: rgb(0, 136, 255);
          }
          a:active {
            color: rgb(0, 111, 207);
            text-decoration: underline rgb(78, 172, 255);
          }
        }
      }
      .link-like-button {
        font-weight: 500;
        background-color: rgb(0, 152, 33);
      }
      .link-like-button:active {
        cursor: pointer;
        //background-color: rgb(3, 187, 43);
      }
      button {
        margin: 0 auto;
      }
    }
  `;





  return (
    <div lang="pl" id="header-main-footer" className={cx(
      ALL,
      {[PHONE]: state.width <= phone_large && isMobile === true},
    )}>
      <Header/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;