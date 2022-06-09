import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import LayoutMain from '../components/ui/main.layout'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
