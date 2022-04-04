// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
import {cx, css} from '@emotion/css';
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





  const ALL = css`
    main {
      margin-top: 20px;
    }
  `;





  return (
    <div lang="pl" id="header-main-footer" className={cx(
      ALL,
    )}>
      <Header/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;