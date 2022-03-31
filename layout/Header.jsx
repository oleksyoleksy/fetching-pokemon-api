// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import Nav from 'comps/Nav';
// REPO-SCSS

const Header = () => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  useEffect(() => {

    // =================================
    // hide <header> when scrolling down
    // show <header> when scrolling up

    const headerSelector = document.querySelector("header");

    // updating `state.vertical_scroll` with current `scrollY` value 
    // if `state.vertical_scroll` is equal to zero 
    if (state.vertical_scroll === 0) {
      state.vertical_scroll = window.scrollY;
    }

    // reading current `scrollY` value
    let last_vertical_scroll = state.vertical_scroll;


    const scrolling_watcher = () => {

      // updating `state.vertical_scroll` dynamically
      state.vertical_scroll = window.scrollY;

      // if scrolling down, 
      // <header> must be shifted up
      if (
        last_vertical_scroll < window.scrollY 
      ) {
        headerSelector.classList.add("header-is-hidden");
      } else {
        headerSelector.classList.remove("header-is-hidden");
      }

      // reading current `scrollY` value
      // to show <header> when scrolling up
      last_vertical_scroll = state.vertical_scroll;

      // for iPhone/iPads:
      if (state.vertical_scroll <= 0) {
        headerSelector.classList.remove("header-is-hidden");
      }

    };

    window.addEventListener('scroll', scrolling_watcher);

    // show <header> when scrolling up
    // hide <header> when scrolling down
    // =================================

	}, []);

  return (
    <header>
      <Nav/>
    </header>
  );
}

export default Header;
