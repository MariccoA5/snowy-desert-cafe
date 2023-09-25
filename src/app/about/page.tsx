import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  YelpIcon,
  GoogleIcon,
  InstagramIcon,
  TiktokIcon,
  AddressIcon,
  PhoneIcon,
} from '@/components/SocialIcons'
import storeImage from '@/images/store.jpg'





    
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
  if (href === '')
    return (
      <li className={clsx(className, 'flex')}>
        <p className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
        </p>
      </li>
    )

  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
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
              src={storeImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Snowy Desert Cafe,
            <br /> St. George, Utah
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
              options that will satisfy any sweet tooth. Our mango snow bowl is
              a favorite among regulars, with its perfect blend of sweet and
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
            <SocialLink
              href="https://www.instagram.com/snowydesertcafe/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://www.tiktok.com/@snowydesertcafe"
              icon={TiktokIcon}
              className="mt-4"
            >
              Follow on Tiktok
            </SocialLink>
            <SocialLink
              href="https://www.yelp.com/biz/snowy-desert-cafe-st-george"
              icon={YelpIcon}
              className="mt-4"
            >
              Leave a review on our Yelp
            </SocialLink>
            {/* google */}
            <SocialLink
              href="https://www.google.com/search?q=snowy+desert+cafe&sca_esv=568031865&sxsrf=AM9HkKnxMOasbIBFkYUjN-ursQl_tcCRVg%3A1695579226125&source=hp&ei=WnwQZf2rBZrakPIP-oSukAc&iflsig=AO6bgOgAAAAAZRCKavuqTeeQHPLAyjaxp2zTdwOMbw3i&oq=snowy&gs_lp=Egdnd3Mtd2l6IgVzbm93eSoCCAAyBxAjGIoFGCcyBBAjGCcyBBAjGCcyBxAAGIoFGEMyChAAGIAEGBQYhwIyCxAuGK8BGMcBGIAEMgsQLhiABBixAxiDATIIEAAYigUYsQMyCxAuGIoFGLEDGIMBMggQABiABBixA0ikC1AAWNsEcAB4AJABAJgBbaAB3AOqAQM0LjG4AQHIAQD4AQHCAg0QLhivARjHARiKBRhDwgIHEC4YigUYQ8ICCxAuGIAEGMcBGNEDwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQABiABBixAxiDAcICBRAAGIAEwgILEC4YgAQYxwEYrwHCAggQABiABBjJA8ICFBAuGIAEGLEDGIMBGMcBGK8BGJgFwgIIEAAYigUYkgM&sclient=gws-wiz&bshm=rime/1#ip=1&lrd=0x80ca5b8d0a64b963:0xbabdc61c3240bc0b,1"
              icon={GoogleIcon}
              className="mt-4"
            >
              Leave a review on Google
            </SocialLink>
            <SocialLink
              href=""
              icon={PhoneIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              (435) 635-1196
            </SocialLink>
            <SocialLink
              href="https://www.google.com/maps/dir//snowy+desert+cafe/@37.0881354,-113.5634088,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80ca5b8d0a64b963:0xbabdc61c3240bc0b!2m2!1d-113.5557403!2d37.0838546?entry=ttu"
              icon={AddressIcon}
              className="mt-4"
            >
              1480 S River Rd Ste 101, St. George, UT 84790
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
