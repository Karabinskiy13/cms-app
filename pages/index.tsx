/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { GetStaticProps } from 'next';
import { IBooks, IBooksFields, IMain, IMainFields } from '../contentful';
import client from '../cms/index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

export default function Home({ home, books }: { home: IMain; books: IBooks[] }) {
  console.log(books);

  return (
    <div>
      <header
        className="header"
        style={{ backgroundImage: `url(http://${home.fields.background?.fields.file.url})` }}>
        <div className="title">{home.fields.title}</div>
        <div className="description">{documentToReactComponents(home.fields.description)}</div>
      </header>
      <main>
        {books.map((book) => (
          <div key={book.fields.showDescription}>
            <img src={`http://${book.fields.poster?.fields.file.url}`} alt="poster" />
            <div>{book.fields.booktitle}</div>
            <Link href={`/books/${book.fields.showDescription}`}>{book.fields.button}</Link>
          </div>
        ))}
      </main>
      <footer>
        <Link href={'https://github.com/Karabinskiy13'}>{home.fields.footer}</Link>
      </footer>
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
