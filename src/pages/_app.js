import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Footer from "../components/footer"
import Navigation from "../components/navigation"
function MyApp({ Component, pageProps }) {
  console.log('app render')
  return <section className='container mx-auto'>
    <Navigation />
    ++++++++
    <Component {...pageProps} />
    ++++++++

    <Footer />
  </section>
}

export default MyApp
