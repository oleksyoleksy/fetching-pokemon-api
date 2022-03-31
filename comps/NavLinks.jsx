// NEXT
import Link from 'next/link';
import {useRouter} from 'next/router';
// REACT
import {useEffect} from 'react';
// YARN
import { v4 as uuidv4 } from 'uuid';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const NavLinks = () => {

  const router = useRouter();

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  // ====================
  // 2022-02-25-Fri-05h54
  // 03--Links, <nav>

  // I need to know how many links I have in NavBar, will use this value when Hamburger Menu is opened, will calculate height of each single NavLink
  let navLinks_counter = 0;

  // I wanted avoid redundant code with navigation Links, 
  // so I choosed to loop through Array of Objects:

  // Array.prototype.map()
  // MDNdocs > Web > JS > Reference > Global Objects > Array > map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

  // 2020-07-16--How to Implement a Component Loop in React @ [by[-Gaurav Singhal [at]-Pluralsight
  // https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react

  const all_navlinks_Array = [
    {path: "/",                txt: "start"},
    {path: "/sub-page",        txt: "sub page"},
    {path: "/hide-and-show",   txt: "hide/show"},
  ];

  useEffect(() => {
    state.how_many_links_in_navbar = all_navlinks_Array.length;
  }, []);

  const all_navlinks_Loop = all_navlinks_Array.map(i => {
    navLinks_counter ++;
    return <li key={uuidv4()}>
      <Link href={i.path}>
        <a 
          className={
            router.pathname == `${i.path}` ? 
            `active a-tag a-tag-${navLinks_counter}` : 
            `a-tag a-tag-${navLinks_counter}`
          }
        >
          {i.txt}
        </a>
      </Link>
    </li>
  });

  // 2022-02-25-Fri-05h54
  // 03--Links, <nav>
  // ====================

  return (
    <ul id="navlinks-jsx">
      {all_navlinks_Loop}
    </ul>
  );
}

export default NavLinks;
