import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import store from './store';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import AnimatedRoutes from 'hocs/routes/Routes';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>JS | Dashboard</title>
        <meta name="description" content="Agencia de software y marketing digital." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.JS.com/" />
        <meta name="author" content='JS' />
        <meta name="publisher" content='JS' />

        {/* Social Media Tags */}
        <meta property="og:title" content='JS | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital.' />
        <meta property="og:url" content="https://www.JS.com/" />
        <meta property="og:image" content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg' />

        <meta name="twitter:title" content='JS | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital.'
        />
        <meta name="twitter:image" content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
      <Router>
          <AnimatedRoutes/>
      </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
