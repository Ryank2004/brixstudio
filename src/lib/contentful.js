import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'brixBlog',
    order: '-fields.publishDate',
  });

  return response.items;
}
