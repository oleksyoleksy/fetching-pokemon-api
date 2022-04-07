// NEXT
import Link from 'next/link';
// REACT
// YARN
// REPO-JS
// REPO-JSX
// REPO-SCSS


const NotFound = () => {

  return (
    <div id="index-jsx">
      <div id="index-jsx-content" className="jsx-content">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/3"><a>Homepage</a></Link></p>
      </div>
    </div>
  );
}

export default NotFound;