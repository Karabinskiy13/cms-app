import React from 'react';
import { GetStaticProps } from 'next';

import { IBooks, IBooksFields, IMain, IMainFields } from '../contentful';
import client from '../cms/index';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Book from '../components/Book';

export default function Home({ home, books }: { home: IMain; books: IBooks[] }) {
  return (
    <div className="container">
      <Header home={home} />
      <main className="content">
        {books.map((book) => (
          <Book key={book.fields.showDescription} books={book} />
        ))}
      </main>
      <Footer home={home} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IMainFields>({
    content_type: 'main',
    limit: 1
  });
  const bookEntries = await client.getEntries<IBooksFields>({
    content_type: 'books'
  });
  const [homePage] = home.items;
  const booksItem = bookEntries.items;
  return {
    props: {
      home: homePage,
      books: booksItem
    }
  };
};
