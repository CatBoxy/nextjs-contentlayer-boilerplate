import { Layout } from '../components/Layout';
import PostCard from '../components/PostCard';

import { allPosts } from 'contentlayer/generated';
import { pick } from 'utils/pick';

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.map(
            ({
              slug,
              publishedAt,
              title,
              readingTime,
              author,
              category,
              image,
              description,
            }) => (
              <div className="col" key={slug}>
                <PostCard
                  slug={slug}
                  title={title}
                  readingTime={readingTime}
                  publishedAt={publishedAt}
                  author={author}
                  category={category}
                  image={image}
                  description={description}
                />
              </div>
            )
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        'slug',
        'title',
        'publishedAt',
        'readingTime',
        'author',
        'category',
        'description',
        'image',
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
