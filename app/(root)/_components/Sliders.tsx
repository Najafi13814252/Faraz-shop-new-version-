"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const slideMap = [
    { id: 1, src: "/images/slideBanner-1.webp" },
    { id: 2, src: "/images/slideBanner-2.webp" }
]

function Sliders() {
    const plugin = Autoplay({ delay: 4000, stopOnInteraction: true })

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        const onSelect = () => {
            setCount(api.scrollSnapList().length)
            setCurrent(api.selectedScrollSnap() + 1)
        }

        onSelect()

        api.on("select", onSelect)

        return () => {
            api.off("select", onSelect)
        }
    }, [api])

    return (
        <div className="relative">
            <Carousel
                opts={{
                    direction: "rtl"
                }}
                setApi={setApi}
                plugins={[plugin]}
                className="w-full"
                onMouseEnter={plugin.stop}
                onMouseLeave={plugin.reset}

            >
                <CarouselContent>
                    {slideMap.map(slide => (
                        <CarouselItem key={slide.id} >
                            <div className="relative w-full h-auto lg:h-72 aspect-21/9">
                                <Image src={slide.src} fill alt={`Slide-${slide.id}`} loading="eager" className="object-cover rounded-2xl" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div> */}
            </Carousel>
            <div className="my-3 flex justify-center absolute bottom-0 right-1/2 translate-x-1/2">
                <div className="w-fit rounded-full px-2 py-1 flex items-center justify-center gap-1 bg-white/50">
                    {Array.from({ length: count }).map((_, index) => (
                        <div className={cn(
                            "h-2 rounded-full transition-all",
                            current === (index + 1) ? "w-4 bg-primary" : "w-2 bg-gray-300"
                        )} key={index}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sliders
