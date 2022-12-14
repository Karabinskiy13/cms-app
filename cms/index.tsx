/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!
});

export default client;
