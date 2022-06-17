import { Layout } from '../../components/Layout';
import Head from 'next/head';
import { Date } from '../../components/Date';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Post({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div>
          <Date dateString={post.publishedAt} />
        </div>
        <div>
          <MDXContent />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
