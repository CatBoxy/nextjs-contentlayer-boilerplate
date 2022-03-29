import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';

import readingTime from 'reading-time';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
};

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
}));

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    category: { type: 'string', required: true },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypePrism,
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
