// NEXT
// REACT
//import {useEffect} from 'react';
// YARN
import {cx, css} from '@emotion/css';
//import { v4 as uuidv4 } from 'uuid';
// REPO-JS
// REPO-JSX
// REPO-SCSS


const Name = ({data}) => {

  /* useEffect(() => {
    console.log(data);
	}, []); */


  const ALL = css`
    img {
      width: 200px;
    }
  `;


  return (
    <div id="loadmore-name-jsx">
      <div id="loadmore-name-jsx-content" className={cx(
        "jsx-content",
        ALL,
      )}>
        <h1>{data.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`} alt={data.id} />
        <h2>id: {data.id}</h2>
        <h3>weight: {data.weight}</h3>
      </div>
    </div>
  );
}

export default Name;