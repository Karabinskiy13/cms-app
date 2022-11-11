import React from 'react';
import { Books } from '../types';
import Link from 'next/link';

const Book = ({ books }: Books) => {
  const posterLink = `http://${books.fields.poster?.fields.file.url}`;
  return (
    <div className="book">
      <img className="poster" src={posterLink} alt="poster" />
      <div className="titlebook">{books.fields.booktitle}</div>
      <Link href={`/books/${books.fields.showDescription}`}>
        <button className="button">{books.fields.button}</button>
      </Link>
    </div>
  );
};

export default Book;
