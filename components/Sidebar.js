import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <img src="/graph.png" alt="Dashboard Icon" />
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <img src="/medal.png" alt="Skill Test Icon" />
          <Link href="/skill-test">Skill Test</Link>
        </li>
        <li>
          <img src="/file.png" alt="Internship Icon" />
          <Link href="/internship">Internship</Link>
        </li>
      </ul>
    </aside>
  );
}
