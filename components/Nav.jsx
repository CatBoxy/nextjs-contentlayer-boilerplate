import React from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

export const Nav = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid ">
        <Link href="/"><a className="navbar-brand" >My contentlayer boilerplate</a></Link>
        <div className="navbar-nav">
          <Link href="https://github.com/CatBoxy/nextjs-contentlayer-boilerplate" passHref>
            <a style={{ color: 'black' }}><AiFillGithub fontSize={'2rem'} /></a>
          </Link>
        </div>
      </div>
    </nav>
  </>
);
