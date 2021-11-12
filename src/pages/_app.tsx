import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navigation from "../components/navigation"
import { containerWidth } from '../const'
import { Provider } from 'react-redux'
import { store } from '../store'
import { useEffect, useState } from 'react'
import { getNavData, TNavData } from '../api/nav'
function MyApp({ Component, pageProps }) {
  console.log('app render')
  const [navData, setNavData] = useState<TNavData>(undefined)
  useEffect(() => {
    (async () => {
      const _navData = await getNavData()
      setNavData(_navData)
    })()
  }, [])
  return (
    <Provider store={store}>
      <section className='mx-auto' style={{ width: containerWidth }}>
        <Navigation navData={navData} />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </section>
    </Provider>)
}

export default MyApp
