'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  SunIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import React, {useState} from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {name: 'Home', href: '/dashboard', icon: HomeIcon},
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon},
  {
    name: 'Without sidebar', icon: SunIcon, innerLinks: [{
      name: 'First page',
      href: '/dashboard/without-sidebar'
    }]
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const onToggleClick = (id: string) => {
    setOpenDropdowns((prev) => ({...prev, [id]: !prev[id]}));
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <React.Fragment key={link.name}>
            {!link.innerLinks ?
              <Link
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  },
                )}
              >
                <LinkIcon className="w-6"/>
                <p className="hidden md:block">{link.name}</p>
              </Link>
              :
              <>
                <button
                  onClick={() => onToggleClick(`dropdown-example-${link.name}`)}
                  aria-controls={`dropdown-example-${link.name}`}
                  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
                  <LinkIcon className="w-6"/>
                  <p>{link.name}</p>
                  <ChevronDownIcon className={clsx('w-6 transition-transform', {
                    'transform rotate-180': openDropdowns[`dropdown-example-${link.name}`],
                  })} />
                </button>
                <div
                  id={`dropdown-example-${link.name}`}
                  className={clsx('h-0 overflow-hidden transition-all', {
                    'h-[48px]': openDropdowns[`dropdown-example-${link.name}`],
                    'hidden': !openDropdowns[`dropdown-example-${link.name}`]
                  })}
                  style={{ marginTop: openDropdowns[`dropdown-example-${link.name}`] ? '0.5rem' : 0 }}
                >
                  {link.innerLinks.map((innerLink) => (
                    <Link
                      key={innerLink.name}
                      href={innerLink.href}
                      className={clsx(
                        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                        {
                          'bg-sky-100 text-blue-600': pathname === innerLink.href,
                        },
                      )}
                    >
                      <p className="hidden md:block">{innerLink.name}</p>
                    </Link>
                  ))
                  }
                </div>
              </>
            }
          </React.Fragment>);
      })}
    </>
  )
}
