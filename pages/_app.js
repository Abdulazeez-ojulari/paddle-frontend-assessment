import '../styles/globals.css';
import '../components/global/navbar/navbar.css';
import '../components/global/footer/footer.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return <div>
    <Script src="https://code.iconify.design/2/2.0.4/iconify.min.js"></Script>
    <Component {...pageProps} />
    </div>
}

export default MyApp
