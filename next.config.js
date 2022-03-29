/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'i.imgur.com'],
  },
});
