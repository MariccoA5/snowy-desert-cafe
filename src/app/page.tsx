import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
// import { Newsletter } from '@/components/Newsletter'

import { Container } from '@/components/Container'
import {
  YelpIcon,
  InstagramIcon,
  TiktokIcon,
  GoogleIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'


function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1 " target='_blank' {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt='Pictures of food from Snowy Desert Cafe'
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Snowy Desert Café
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
           A delightful culinary oasis where flavors from around the world unite to create a unique cafe experience. Indulge in the velvety smoothness of Bingsu (Shaved Snow), a Korean dessert sensation, or savor the refreshing burst of Boba Drinks. For those seeking a fusion adventure, our Crunch Wraps, Ramens, and Quesadilla will tantalize your taste buds. At Snowy Desert Cafe, every bite is an exquisite journey of taste and texture, where global culinary traditions harmoniously converge.
          </p>
          <div className="mt-6 flex gap-6">
            
            <SocialLink
              href="https://www.instagram.com/snowydesertcafe/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://www.tiktok.com/@snowydesertcafe"
              aria-label="Follow on Tiktok"
              icon={TiktokIcon}
            />
            <SocialLink
              href="https://www.yelp.com/biz/snowy-desert-cafe-st-george"
              aria-label="Leave a review on Yelp"
              icon={YelpIcon}
            />
            <SocialLink
              href="https://www.google.com/search?q=snowy+desert+cafe&sca_esv=568031865&bih=793&biw=1440&hl=en&sxsrf=AM9HkKmVU6Xc-8hwgZ-BV7hcOLjl4mH4fA%3A1695581405372&source=hp&ei=3YQQZdS-EPqIkPIP7uufgAk&iflsig=AO6bgOgAAAAAZRCS7QKOeOFKFKs_7PyUX_KsriRupt0f&oq=s&gs_lp=Egdnd3Mtd2l6IgFzKgIIADIHECMYigUYJzIEECMYJzIEECMYJzIUEC4YigUYsQMYgwEYxwEY0QMYkQIyFBAuGIoFGLEDGIMBGMcBGNEDGJECMhEQLhiABBixAxiDARjHARjRAzIFEC4YgAQyCxAAGIAEGLEDGIMBMhEQLhiKBRixAxiDARjHARjRAzIREC4YgAQYsQMYgwEYxwEY0QNI4gtQAFgAcAB4AJABAJgBWKABWKoBATG4AQHIAQD4AQE&sclient=gws-wiz&bshm=rime/1#lrd=0x80ca5b8d0a64b963:0xbabdc61c3240bc0b,1"
              aria-label="Leave a review on Google"
              icon={GoogleIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          reviews
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter />*/}
          </div>
        </div>
      </Container>
    </>
  )
}
