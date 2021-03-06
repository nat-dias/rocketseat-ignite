import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
   return (
      <aside className={styles.sidebar}>
         <img
            className={styles.cover}
            src='https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
         />
         <div className={styles.profile} >
            <img className={styles.avatar} src='https://github.com/nat-dias.png' />

            <strong>Nat Dias</strong>
            <span>Front End Developer</span>
         </div>

         <footer>
            <a href='#'>
               <PencilLine size={20}/>
               Editar seu perfil
            </a>
         </footer>
      </aside>
   )
}