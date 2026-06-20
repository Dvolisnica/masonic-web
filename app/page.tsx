import Link from 'next/link';
import { BODIES, asset } from '@/lib/site';

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <span className="eyebrow">Tri tijela · Jedan portal</span>
        <h1>
          Dobrodošli u <span className="accent">zajednicu reda</span>
        </h1>
        <p>
          Odaberite tijelo da biste saznali više o njegovoj istoriji, radu i
          članstvu. Svaki znak vodi u svoj dio portala.
        </p>
      </section>

      <section className="cards">
        {BODIES.map((b) => (
          <Link
            key={b.slug}
            href={`/${b.slug}`}
            className="card"
            style={{ ['--accent' as any]: b.accent }}
          >
            <div className="card-logo">
              <img src={asset(b.logo)} alt={`${b.name} logo`} />
            </div>
            <span className="sub">{b.sub}</span>
            <h3>{b.name}</h3>
            <p>{b.blurb}</p>
            <span className="enter">
              Uđi <span>→</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
