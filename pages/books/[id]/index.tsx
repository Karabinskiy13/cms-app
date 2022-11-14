import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

import client from '../../../cms';
import { IBooks, IBooksFields } from '../../../contentful';

type Books = {
  booksPage: IBooks;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const BooksPage = ({ booksPage }: Books) => {
  return (
    <div>
      <Link href="/">
        <button className="buttonPage">Home</button>
      </Link>
      <div className="titlePage">{booksPage.fields.booktitle}</div>
      <div className="descriptionPage">{booksPage.fields.description}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const book = await client.getEntries<IBooksFields>({
    content_type: 'books',
    'fields.showDescription': id,
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
