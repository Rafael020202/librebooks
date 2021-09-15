import { GetServerSideProps } from 'next';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import firebase from '../../services/firebaseConnection';
import styles from './styles.module.scss';

interface Book {
  id: string,
  image: string,
  description: string,
  title: string,
  author: string
  chapters: string[];
}

export default function Book({data}) {
  const [book] = useState<Book>(JSON.parse(data));

  return(
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <img src={book.image}/>
            
            <span>
              {book.description}
            </span>
          </div>
        </div>
        
      </div>

      {book.chapters.map((chapter, index) => (
        <div key={index} className={styles.audioContainer}>
          <h3>Capítulo {index+1}</h3>
          <AudioPlayer
            src={chapter}
          />
        </div>
      ))
      }
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {id} = params;
  const doc = await firebase.firestore().collection('books').doc(String(id)).get();

  const data = JSON.stringify({
    id: doc.id,
    ...doc.data()
  });

  console.group(data);

  return {
    props: {
      data
    }
  }
}