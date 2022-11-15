import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Books } from '../types';

const Book = ({ books }: Books) => {
  const posterLink = `http://${books.fields.poster?.fields.file.url}`;
  const showDescription = `/books/${books.fields.showDescription}`;

  return (
    <div className="book">
      <img className="poster" src={posterLink} width={270} height={400} alt="poster" />
      <div className="titlebook">{books.fields.booktitle}</div>
      <Link href={showDescription}>
        <button className="button">{books.fields.button}</button>
      </Link>
    </div>
  );
};

export default Book;
