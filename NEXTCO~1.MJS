/** @type {import('next').NextConfig} */

// Za GitHub Pages: ako se sajt servira na https://<korisnik>.github.io/<repo>/
// postavi BASE_PATH na "/<repo>". Lokalno ostavi prazno.
// U GitHub Actions se ovo automatski postavlja (vidi .github/workflows/deploy.yml).
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export', // statički HTML export — radi na GitHub Pages
  basePath: basePath,
  images: {
    unoptimized: true, // nema servera za optimizaciju slika na Pages
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
