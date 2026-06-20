# Masonska Tijela — web portal

Moderan portal s tri masonska tijela. Početna stranica ima tri loga
(Kraljevski svod / Royal Arch, Kripta / Royal & Select Masters, Templari /
Knights Templar), a svaki vodi u svoj dio sajta. Pripremljen je i prostor za
buduću prijavu članova (`/clanovi`).

Tehnologija: **Next.js 14** (App Router) + statički export → radi na
**GitHub Pages**.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori http://localhost:3000

## Build (statički export)

```bash
npm run build
```

Rezultat je u folderu `out/` — gotovi statički sajt.

## Postavljanje na GitHub

```bash
git init
git add .
git commit -m "Prvi commit"
git branch -M main
git remote add origin https://github.com/<korisnik>/<repo>.git
git push -u origin main
```

Zatim na GitHub-u: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. Nakon svakog `push`-a na `main`, sajt se automatski builda i
objavi (vidi `.github/workflows/deploy.yml`).

### Putanja (BASE_PATH)

- Ako je repo `<korisnik>.github.io` → sajt je na korijenu, ništa ne treba.
- Ako je repo bilo kojeg drugog imena → sajt ide na
  `https://<korisnik>.github.io/<repo>/`. Workflow to **automatski** rješava
  postavljanjem `BASE_PATH=/<repo>`.

## Struktura

```
app/
  page.tsx            # početna — tri loga
  royal-arch/         # Kraljevski svod
  kripta/             # Kripta
  templari/           # Templari
  clanovi/            # prijava članova (placeholder)
  layout.tsx
  globals.css
components/
  Navbar.tsx  Footer.tsx  BodyPage.tsx
lib/
  site.ts             # SVE izmjene teksta/naziva/boja idu ovdje
public/logos/         # tri SVG loga
```

## Izmjena sadržaja

Nazivi tijela, opisi i tekstovi se mijenjaju na jednom mjestu: `lib/site.ts`.

## Plan za login članova

Stranica `/clanovi` je trenutno samo izgled (UI). Pošto je sajt statički,
prava autentikacija se kasnije dodaje preko vanjskog servisa, npr.
**Supabase Auth**, **Clerk**, **Auth0** ili **Firebase Auth**. Tada se interni
članski sadržaj prikazuje tek nakon prijave.
