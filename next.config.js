// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'source.unsplash.com',
      'media.gettyimages.com',
      'www.keralatourism.org',
      'lh3.googleusercontent.com',
      'dynamic-media-cdn.tripadvisor.com',
      'in.bmscdn.com',
      'upload.wikimedia.org',
      'openweathermap.org', 
      'maps.googleapis.com'  // ✅ Add Google Maps domain here
    ]
  },
}

module.exports = nextConfig;
