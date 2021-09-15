import Link from 'next/link';

import styles from './styles.module.scss';

export default function Sidebar() {
  return(
    <div className={styles.container}>  
      <div className={styles.profile}>
        <img src='/images/audiobook.png' alt="" />
      </div>
      
      <ul>
        <li>
          <Link href={'/genre/adventure'}>
            Aventura
          </Link>
        </li>
        
        <li>
          <Link href={'/genre/comedy'}>
            Comédia
          </Link>
        </li>
        
        <li>
          <Link href={'/genre/kid'}>
            Infantil
          </Link>  
        </li>
       
        <li>
          <Link href={'/genre/mistery'}>
            Mistério
          </Link> 
        </li>
       
        <li>
          <Link href={'/genre/romance'}>
            Romance
          </Link> 
        </li>
        
        <li>
          <Link href={'/genre/poetry'}>
            Poesia
          </Link> 
        </li>
      </ul>
    </div>
  );
}