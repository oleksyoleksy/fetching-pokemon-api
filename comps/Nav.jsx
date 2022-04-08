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
      color: rgb(0, 136, 255);
    }
    a:hover {
      color: rgb(0, 111, 207);
      text-decoration: underline rgb(78, 172, 255);
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