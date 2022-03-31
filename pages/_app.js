// NEXT
// REACT
// YARN
// REPO-JS
// REPO-JSX
import Layout from 'layout/Layout';
// REPO-SCSS
import 'styles/globals.scss';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default MyApp
