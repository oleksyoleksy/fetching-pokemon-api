// NEXT
import Head from 'next/head';
// REACT
// YARN
// REPO-JS
// REPO-JSX
// REPO-SCSS





// 2022-02-04-Fri-11h21
// 08--<meta/> as separate Comp

// The metadata <meta> element
// MDNdocs > Web > HTML > Element > meta
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta

// I'm trying to DRY, so I wanna keep
// those <meta> Attributes in one and only place

// this MetaTag component is imported to every 
// ~/page/*.js file

const MetaTag = () => {

  return (
    <Head>
      <meta 
        charSet="UTF-8"
        httpEquiv="X-UA-Compatible"
        name="viewport" 
        content="IE=edge, width=device-width, initial-scale=1.0, viewport-fit=cover" 
      />
    </Head>
  );
}

export default MetaTag;
