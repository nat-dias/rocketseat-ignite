import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Nat"
            content="Maravilhosa"
          />
          <Post 
            author="Fértil"
            content="Musa"
          />
        </main>
      </div>
    </div>
  )
}

export default App
