import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Snowy Desert Cafe is a hidden gem that offers a delightful experience to anyone looking for a refreshing dessert or a relaxing place to hang out.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Snowy Desert Cafe,<br/> St. George, Utah
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Nestled in the heart of St. George, UT, Snowy Desert Cafe is a
              hidden gem that offers a delightful experience to anyone looking
              for a refreshing dessert or a relaxing place to hang out.
            </p>
            <p>
              As soon as you walk in, you'll be greeted with a cozy and
              welcoming atmosphere that's perfect for a casual hangout or an
              intimate catch-up session with friends. The decor is simple yet
              charming, with comfortable seating and a friendly staff that's
              always ready to help you with your orders.
            </p>
            <p>
              But the real star of the show at Snowy Desert Cafe is our
              delicious and refreshing desserts. From the classic bingsu to the
              mouth-watering snow bowls, Snowy Desert Cafe has a wide range of
              options that will satisfy any sweet tooth. Our mango snow bowl
              is a favorite among regulars, with its perfect blend of sweet and
              tangy flavors that make for a truly refreshing treat.
            </p>
            <p>
              But it's not just the desserts that make Snowy Desert Cafe stand
              out. The quality of our ingredients is top-notch, ensuring that
              every bite is packed with flavor. And if you're in the mood for a
              savory snack, Snowy Desert Cafe also offers a variety of light
              bites, like their tasty chicken wings or their delicious Korean
              street food.
            </p>
            <p>
              Whether you're looking for a quick bite or a place to unwind,
              Snowy Desert Cafe is the perfect destination. With its friendly
              atmosphere, top-quality ingredients, and delicious desserts, it's
              no wonder why it's become a favorite among locals and visitors
              alike. So next time you're in St. George, be sure to swing by and
              treat yourself to a sweet and refreshing experience at Snowy
              Desert Cafe.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/snowydesertcafe/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@snowydesertcafe" icon={LinkedInIcon} className="mt-4">
              Follow on Tiktok
            </SocialLink>
            <SocialLink href="https://www.yelp.com/biz/snowy-desert-cafe-st-george" icon={GitHubIcon} className="mt-4">
              Check out our Yelp
            </SocialLink>
            
            <SocialLink
              href="#"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              email coming soon
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
