import React from 'react';
import Link from 'next/link';
import Image, { ImageLoaderProps } from 'next/image';

import { Books } from '../types';

const Book = ({ books }: Books) => {
  const posterLink = `http://${books.fields.poster?.fields.file.url}`;
  const showDescription = `/books/${books.fields.showDescription}`;
  const loaderProp = ({ src }: ImageLoaderProps) => {
    return src;
  };

  return (
    <div className="book">
      <Image
        className="poster"
        src={posterLink}
        width={270}
        height={400}
        alt="poster"
        loader={loaderProp}
      />
      <div className="titlebook">{books.fields.booktitle}</div>
      <Link href={showDescription}>
        <button className="button">{books.fields.button}</button>
      </Link>
    </div>
  );
};

export default Book;
