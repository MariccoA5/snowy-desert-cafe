import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

const orderNow: string = 'https://food.google.com/chooseprovider?restaurantId=/g/11s7gqmfgt&g2lbs=ANTchaP45HLJdnDEWjRaGLNeH3lHf4JPcPlz5kjWtZvcz2xdqiX9MMzxsABwbIMJYwwN2qyn0eBI0WR_m30yztGZigodkbfgBKB-2oE9aQKc49pp-IOv5onSzTQGXqV05NXk_HuE2VIq&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=73sQZeGwNszHkPIP6fuG6A0&ei=73sQZeGwNszHkPIP6fuG6A0&opi=89978449&addressId&orderType=2&partnerId=11964329533172037388&fulfillmentTime&menuSearchQuery&cartId=GAEiGGZEa05mQ2tlUm1lOXE1bGxJQXRvbFE9PQ%3D%3D&fo_s=OA&dineInLocationId&sei=CVGuE30QfBy0EZjiRirZB-mO&utm_campaign&utm_source=search'

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternalLink = href.startsWith('http');

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-teal-500 dark:hover:text-teal-400"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/menu">Menu</NavLink>
                <NavLink href={orderNow}>Order Online</NavLink>
                
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Website made by Maricco Allen
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
