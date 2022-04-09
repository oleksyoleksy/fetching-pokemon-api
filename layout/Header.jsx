// NEXT
// REACT
// YARN
import {cx, css} from '@emotion/css';
// REPO-JS
// REPO-JSX
import Nav from 'comps/Nav';
// REPO-SCSS

const Header = () => {

  const ALL = css`
  background-color: #def9fa;`;

  return (
    <header className={cx(ALL,)}>
      <Nav/>
    </header>
  );
}

export default Header;