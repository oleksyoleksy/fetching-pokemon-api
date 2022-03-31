// NEXT
// REACT
import {useEffect} from 'react';
// YARN
import {cx, css} from '@emotion/css';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
import NavLinks from 'comps/NavLinks';
// REPO-SCSS


const Nav = () => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);





  useEffect(() => {
    for (let i = 0; i < state.how_many_links_in_navbar; i++) {
      //console.log(`a-tag-${i+1}`);
      //console.log(document.querySelector(`.a-tag-${i+1}`).innerHTML.toUpperCase());
      //console.log(document.querySelector(`.a-tag-${i+1}`).offsetWidth);
      state.all_links_width_combined = 
        state.all_links_width_combined + 
        document.querySelector(`.a-tag-${i+1}`).offsetWidth;
    }
    //console.log(state.all_links_width_combined);
	}, []);

  state.space_between_two_links = 
    (state.width - state.all_links_width_combined) / 
    (state.how_many_links_in_navbar + 1);
  //console.log(state.space_between_two_links);





  const switch_to_hamburger = css`
    a {
      background-color: rgba(255, 255, 0, 1.0)
    }
  `;

  const ALL = css`
    width: 100vw;
    height: 50px;
    background-color: rgba(224, 224, 224, 1.0);
    //background-color: rgba(224, 224, 224, 0.5);
    //background-color: red;
    ul {
      height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly; // horizontally
      align-items: center; // vertically
    }
    a {
      text-transform: uppercase;
      text-decoration: none;
    }
    .active,
    a:hover {
      text-decoration: underline;
    }
  `;





  return (
    <nav className={cx(
      ALL,
      {[switch_to_hamburger]: state.space_between_two_links <= 25},
    )}>
      <NavLinks/>
    </nav>
  );
}

export default Nav;
