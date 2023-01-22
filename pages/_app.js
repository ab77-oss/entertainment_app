import '../styles/globals.css';
import { store } from '../redux-toolkit/store';
import { Provider } from 'react-redux';



function MyApp({ Component, pageProps }) {
  // Place this in the pages/_app.js file
  
  return (
  <Provider store={store}>
      <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
