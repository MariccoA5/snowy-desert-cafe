import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'

import image1 from '@/images/Thirsty-5.jpg'
import image2 from '@/images/Panda-Favorites-3.jpg'
import image3 from '@/images/Sorry-Our-Menu-is-getting-new-items-22-1.jpg'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Our delicious menu.',
}

export default function Menu() {
  return (
    // Three large photos, one on top of the other
    // center the images
    <Container className="mt-16 sm:mt-24">
      <div className="justify-center px-8 lg:px-32 gap-y-16 lg:gap-y-12">
        <Image src={image1} alt="Thirsty-5"/>
        <br />
        <Image src={image2} alt="Panda-Favorites-3" />
        <br />
        <Image src={image3} alt="Menu-is-getting-new-items" />
      </div>

    </Container>
  )
}
