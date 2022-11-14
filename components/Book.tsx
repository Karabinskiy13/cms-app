import React from 'react';
import Link from 'next/link';

import { Books } from '../types';
import Image from 'next/image';

const Book = ({ books }: Books) => {
  const posterLink = `http://${books.fields.poster?.fields.file.url}`;
  return (
    <div className="book">
      <Image className="poster" src={posterLink} width={270} height={400} alt="poster" />
      <div className="titlebook">{books.fields.booktitle}</div>
      <Link href={`/books/${books.fields.showDescription}`}>
        <button className="button">{books.fields.button}</button>
      </Link>
    </div>
  );
};

export default Book;
