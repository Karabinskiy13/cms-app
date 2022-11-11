import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import client from '../../cms';
import { IBooks, IBooksFields } from '../../contentful';
import Books from '../../types';

type Books = {
  booksPage: IBooks;
};

const BooksPage = ({ booksPage }: Books) => {
  return (
    <div>
      <div>{booksPage.fields.booktitle}</div>
      <div>{booksPage.fields.description}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async (args) => {
  const books = await client.getEntries<IBooksFields>({
    content_type: 'books'
  });

  return {
    paths: books.items.map((book) => {
      return {
        params: {
          id: book.fields.showDescription
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (args) => {
  const book = await client.getEntries<IBooksFields>({
    content_type: 'books',
    'fields.showDescription': args.params.id,
    limit: 1
  });

  const [booksPage] = book.items;

  return {
    props: {
      booksPage
    }
  };
};

export default BooksPage;
