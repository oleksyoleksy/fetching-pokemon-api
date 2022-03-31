// NEXT
// REACT
// YARN
import { v4 as uuidv4 } from 'uuid';
// REPO-JS
// REPO-JSX
// REPO-SCSS


const Index = ({data}) => {

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">

        <h1>Pokémons:</h1>

        {
          data.map(i => (
            <p key={uuidv4()}>{i.name}</p>
          ))
        }

      </div>
    </div>
  );
}

export default Index;
