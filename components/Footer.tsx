import React from 'react';
import Link from 'next/link';

import { Home } from '../types';

const Footer = ({ home }: Home) => {
  const authorLink = 'https://github.com/Karabinskiy13';
  return (
    <div>
      <footer>
        <Link href={authorLink}>{home.fields.footer}</Link>
      </footer>
    </div>
  );
};

export default Footer;
