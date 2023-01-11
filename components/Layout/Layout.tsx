import Link from 'next/link';
type Props = {
  children?: React.ReactNode;
};

type LinkType = {
  url: string;
  label: string;
};

const navLinks: LinkType[] = [
  {
    url: '/simple-form',
    label: 'Simple form',
  },
  {
    url: '/form-with-sections',
    label: 'Form with sections',
  },
];

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {navLinks.map((l) => (
              <li className="nav-item" key={l.url}>
                <Link href={l.url}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Kirill Kazakov{' '}
        </a>
      </footer>
    </>
  );
};
