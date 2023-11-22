'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { GiHamburgerMenu } from 'react-icons/gi';

const NAV_ITEMS = [
  { name: 'Home', href: './' },
  { name: 'News', href: './news' },
  { name: 'Blog', href: './blog' },
  { name: 'Courses', href: './courses' },
  { name: 'Contact Us', href: './contact-us' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-stone-800 flex items-center px-1 justify-between">
      <div className="ml-3">
        <GiHamburgerMenu className="text-white sm:hidden h-7 w-7 justify-center" />

        <ul className="sm:flex hidden  gap-6 text-xs">
          {NAV_ITEMS.map((item, i) => (
            <Link href={item.href} key={i}>
              <li
                className={clsx(
                  `hover:text-white ${
                    pathname === item.href.slice(1)
                      ? 'text-white '
                      : 'text-neutral-400'
                  }`
                )}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="py-2 h-12">
        <input
          className="h-full px-2 text-sm sm:text-xs"
          type="text"
          placeholder="Search here..."
        />
        <button className="h-full px-2 bg-emerald-300/60 text-white sm:text-xs text-sm ">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Nav;
