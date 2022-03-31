// NEXT
// REACT
// YARN
import {cx, css} from '@emotion/css';
//import Color from 'color';
// REPO-JS
import {rgb} from 'ui/colors';
// REPO-JSX
// REPO-SCSS

const Footer = () => {

  const ALL = css`
    height: 1000px;
    //background-color: rgba(224, 224, 224, 1.0);

    background-color: ${rgb.p423_f05};
  `;

  return (
    <footer className={cx(ALL)}>
      <h1>Footer</h1>
    </footer>
  );
}

export default Footer;
