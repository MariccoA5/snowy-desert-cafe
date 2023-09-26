"use client"
import { StarIcon } from '@heroicons/react/solid'
import Image, { StaticImageData } from 'next/image'
import reviewer1 from '@/images/photos/Reviews/reviewer-1.png'
import reviewer2 from '@/images/photos/Reviews/reviewer-2.png'
import reviewer3 from '@/images/photos/Reviews/reviewer3.jpeg'

type Review = {
  id: number,
  rating: number,
  content: string,
  date: string,
  datetime: string,
  author: string,
  avatarSrc: StaticImageData,
}


const reviews: Review[] = [
  {
    id: 3,
    rating: 5,
    content: `
      <p>Very kind staff and great food! I went with my friends- since it was our first time here, Andrew and Jen helped us pick out some great options on the menu which we absolutely loved. We ended up getting the Strawberry Shortcake and Assorted Fruit Bingsu Snow. Heavenly! Will definitely come back soon.</p>
      `,
    date: 'Sept 01, 2023',
    datetime: '2023-09-01',
    author: 'Logan Sutera',
    avatarSrc:
     reviewer2,
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Today I ordered a pastry called the "Taiyaki Chocolate Filled Japanese Fish with Syrup".  It was delicious!  I brought it home and had my sons try it and they loved it.  A new taste I have not  experienced before and I will be going back for more!</p>
    `,
    date: 'Sept 20, 2023',
    datetime: '2023-09-20',
    author: 'Elizabeth Abel',
    avatarSrc:
     reviewer3,
  },
  {
    id: 1,
    rating: 5,
    content: `
      <p>Just tried this spot for the first time and let me tell you, their chicken crunch wrap was Amazing! Even my picky 3 year old loved it! The service was great and super friendly! Definitely a nice little spot! I highly recommend!</p>
    `,
    date: 'Sept 23, 2023',
    datetime: '2023-09-23',
    author: 'Susan Anaya',
    avatarSrc:
      reviewer1,
  }
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function UserReviews(): JSX.Element {
  return (
    <div className='bg-transparent'>
      <div>
      
        <h2 className="sr-only ">Customer Reviews</h2>

        <div className={'-my-10 mx-32 '}>
        <h2 className="font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl text-2xl text-center">What people are saying</h2>
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className={`flex space-x-4 text-sm ${classNames('text-gray-600', 'dark:text-zinc-100')}`}>
              <div className="flex-none py-10">
                <Image src={review.avatarSrc} alt="avatar" width='0' height='0' className="h-10 w-10 rounded-full bg-gray-100" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t mt-5 border-gray-200', 'flex-1 py-4')}>
                <h3 className={`font-medium ${classNames('text-gray-900', 'dark:text-white')}`}>{review.author}</h3>
                <p className={`text-gray-500 ${classNames('dark:text-gray-400')}`}>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className={`mt-4 flex items-center ${classNames('text-gray-500', 'dark:text-gray-400')}`}>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                  <span className={`ml-1 text-gray-500 ${classNames('dark:text-gray-400')}`}>
                    {review.rating} out of 5 stars
                  </span>
                </div>

                <div className={`mt-2 text-gray-500 ${classNames('dark:text-gray-400')}`} dangerouslySetInnerHTML={{ __html: review.content }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}