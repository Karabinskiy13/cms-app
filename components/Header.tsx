import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Home } from '../types';

const Header = ({ home }: Home) => {
  const backgroundLink = `url(http://${home.fields.background?.fields.file.url})`;

  return (
    <header className="header" style={{ backgroundImage: backgroundLink }}>
      <div className="title">{home.fields.title}</div>
      <div className="description">{documentToReactComponents(home.fields.description)}</div>
    </header>
  );
};

export default Header;
