import BodyPage from '@/components/BodyPage';
import { BODIES } from '@/lib/site';

const body = BODIES.find((b) => b.slug === 'kripta')!;

export const metadata = { title: `${body.name} · ${body.sub}` };

export default function Page() {
  return <BodyPage body={body} />;
}
