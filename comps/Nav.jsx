// NEXT
import Link from 'next/link';
// REACT
// YARN
import {cx, css} from '@emotion/css';
import {useSnapshot} from 'valtio';
// REPO-JS
import {state} from 'state.js';
// REPO-JSX
// REPO-SCSS


const Nav = () => {

  // with useSnapshot() hook, I can see recent valtio-state values 
  // in React DevTools > MyApp > Layout > hooks > Snapshot > Ref > ...
  useSnapshot(state);

  const ALL = css`
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline rgb(128, 128, 128);
    }
  `;

  return (
    <nav className={cx(
      ALL,
    )}>
      <Link href="/3"><a>homepage</a></Link>
    </nav>
  );
}

export default Nav;