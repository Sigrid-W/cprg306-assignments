import Link from 'next/link'
const navItems = [
  {
    title: "Go to Week 2",
    href: "week-2",
  },
  {
    title: "Go to Week 3",
    href: "week-3",
  },
]

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <nav className="flex items-center gap-3">
        {navItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-3">
            <Link
              href={item.href}
              className="hover:text-blue-600 duration-300 ease-linear"
            >
              {item.title}
            </Link>

            {index < navItems.length - 1 && <span>→</span>}
          </span>
        ))}
      </nav>

    </main>
  );
}