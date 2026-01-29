import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex items-center gap-3">
      <Link href="http://localhost:3000/week-2">Go to Week 2</Link>
      <span>→</span>
      <Link href="http://localhost:3000/week-3">Go to Week 3</Link>
    </div>
    </main>
  );
}