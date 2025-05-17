import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Props {
  imgUrl: string[]
}

export default function CarouselSize(props: Props) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-4/5 mx-auto my-8"
    >
      <CarouselContent>
        {props.imgUrl.map((url, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center size-fit">
                <img
                  src={url}
                  className="w-full h-full object-cover rounded-xl"
                  alt="image"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
