import { SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {SITE.name}. Sva prava zadržana.</span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}
