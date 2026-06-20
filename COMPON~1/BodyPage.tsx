import Link from 'next/link';
import { Body, asset } from '@/lib/site';

export default function BodyPage({ body }: { body: Body }) {
  return (
    <>
      <section
        className="page-hero"
        style={{ ['--accent' as any]: body.accent }}
      >
        <div className="page-logo">
          <img src={asset(body.logo)} alt={`${body.name} logo`} />
        </div>
        <span className="sub" style={{ color: body.accent }}>
          {body.sub}
        </span>
        <h1>{body.name}</h1>
      </section>

      <div className="container">
        <article className="content">
          {body.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2>Za članove</h2>
          <p>
            Interni sadržaj, raspored sastanaka i dokumenti biće dostupni nakon
            prijave. Pristup će imati samo verifikovani članovi.
          </p>

          <Link href="/" className="back-link">
            ← Nazad na početnu
          </Link>
        </article>
      </div>
    </>
  );
}
