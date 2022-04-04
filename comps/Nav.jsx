// NEXT
import Link from 'next/link';
// REACT
// YARN
import {cx, css} from '@emotion/css';
// REPO-JS
// REPO-JSX
// REPO-SCSS


const Nav = () => {

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
      <Link href="/"><a>homepage</a></Link>
    </nav>
  );
}

export default Nav;