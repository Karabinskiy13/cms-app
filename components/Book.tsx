import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Books } from '../types';
import { contentfulLoader } from '@delicious-simplicity/next-image-contentful-loader';

const Book = ({ books }: Books) => {
  const posterLink = `http://${books.fields.poster?.fields.file.url}`;
  const showDescription = `/books/${books.fields.showDescription}`;

  return (
    <div className="book">
      <Image
        loader={(props) => contentfulLoader(props, { fit: 'crop', ar: '1:1' })}
        className="poster"
        src={posterLink}
        width={270}
        height={400}
        alt="poster"
      />
      <div className="titlebook">{books.fields.booktitle}</div>
      <Link href={showDescription}>
        <button className="button">{books.fields.button}</button>
      </Link>
    </div>
  );
};

export default Book;
