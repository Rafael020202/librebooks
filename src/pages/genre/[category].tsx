import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import firebase from '../../services/firebaseConnection';
import styles from './styles.module.scss'

interface Book {
  id: string,
  image: string,
  description: string,
  title: string,
  author: string
}

export default function Genres({category}) {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() =>{
    async function getBooks(){
      const { docs } = await firebase.firestore().collection('books').where('category', '==', category).get();
      const data = docs.map((doc) => (
          {
            id: doc.id,
            image: doc.data().image,
            description: doc.data().description,
            title: doc.data().title,
            author: doc.data().author
          }
        ))
  
      setBooks(data);
    }
    getBooks();

  }, [category])

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      
      <div className={styles.bookContainer}>
        {books.map(book => (
            <div key={book.id}>
              <img src={book.image}/>
              <h4>
                <Link href={`/book/${book.id}`}>
                  {book.title}
                </Link>
              </h4>
              
              <span>{book.author}</span>
              <br />
              <FaStar color={'#cf8817'}/>
              <FaStar color={'#cf8817'}/>
              <FaStar color={'#cf8817'}/>
              <FaStar color={'#cf8817'}/>
              <FaStar color={'#cf8817'}/>
            </div>
        ))}
      </div>
    </>
  );
}

/*export const getServerSideProps: GetServerSideProps = async function (request) {
  const { category } = request.params;

  const { docs } = await firebase.firestore().collection('books').where('category', '==', category).get();
  const data = JSON.stringify(
    docs.map((doc) => (
      {
        id: doc.id,
        image: doc.data().image,
        description: doc.data().description,
        title: doc.data().title,
        author: doc.data().author
      }
    ))
  );

  console.log(data);

  return {
    props: {
      category,
      data
    },

  }
} */

export const getServerSideProps: GetServerSideProps = async (request) => {
  const { category } = request.params;
 
  return {
    props: {
      category,
    },
  }
}