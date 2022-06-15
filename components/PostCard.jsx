import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Date from './Date';

export default function PostCard({
  title,
  slug,
  image,
  category,
  publishedAt,
  readingTime,
  description,
}) {
  return (
    <>
      <div className="card" >
        <div style={{ position: 'relative', width: '100%', height: '16rem' }}>
          <Image layout='fill' className="card-img-top" objectFit='cover' src={image} alt={`Feature image for ${title}`}/>
        </div>
        <div className="card-body">
          <p className="card-text text-secondary">{category}</p>
          <Link href={`/posts/${slug}`} passHref><a style={{ textDecoration: 'none', color: 'black' }}><h5 className="card-title">{title}</h5></a></Link>
          <p className="card-text">{description}</p>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link href={`/posts/${slug}`} passHref><a style={{ textDecoration: 'none' }}>Leer mas</a></Link>
            </div>
            <div style={{ color: 'grey' }}>
              <Date dateString={publishedAt}/>{` | ${readingTime.text}`}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
