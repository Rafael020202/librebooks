import '../styles/globals.scss'
import 'react-h5-audio-player/src/styles.scss'

import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      
      <main className={styles.content}>
        <Component {...pageProps} />
      </main>
    
    </div>
  )
}

export default MyApp
