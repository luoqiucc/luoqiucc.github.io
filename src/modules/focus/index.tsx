import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

function Focus() {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={16 / 6}>
              <a href="#">
                <div className="relative h-full w-full">
                  <img
                    src="https://pic1.imgdb.cn/item/69dba6c2e972b74d7847640d.jpg"
                    alt="Image"
                    className="absolute top-0 left-0 h-full w-full rounded-md bg-accent object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full overflow-hidden rounded-b-md bg-black/10 p-8 backdrop-blur">
                    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-white">
                      多美卡150简评
                    </h1>
                    <p className="text-center leading-7 text-white [&:not(:first-child)]:mt-6">
                      今天来把玩一下多美卡的电车
                    </p>
                  </div>
                </div>
              </a>
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export { Focus }
