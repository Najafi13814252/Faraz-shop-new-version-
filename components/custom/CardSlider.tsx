import { products } from "@/data/products"
import { Card } from "../ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import SectionHeader from "./SectionHeader"
import Image from "next/image"

function CardSlider() {
    return (
        <div>
            <SectionHeader>
                <div className="">
                    <Carousel
                        opts={{
                            align: "start",
                            direction: "rtl"
                        }}
                        className="w-full relative"
                    >
                        <CarouselContent className="-mr-3">
                            {products.map(product => (
                                <CarouselItem key={product.id} className=" lg:basis-1/5 pr-3">
                                    <div className="p-0.5 h-full">
                                        <Card className="h-full flex flex-col p-3 cursor-pointer hover:bg-gray-100 duration-200">
                                            <div className="relative w-44 mx-auto aspect-square">
                                                <Image src={product.img} alt={product.name} fill className="object-cover" />
                                            </div>
                                            <div className="w-full flex-1">
                                                <p className="line-clamp-2 font-medium font-arad text-sm w-full">{product.name}</p>
                                            </div >
                                            {product.off > 0 ? (
                                                <div className="flex items-center justify-between">
                                                    <p className="bg-red-500 rounded px-2 py-0.5 text-white">{product.off}%</p>

                                                    <div className="text-left">
                                                        <p className="text-base">{((product.price - (product.price * product.off / 100)).toLocaleString("fa-IR"))} تومان</p>
                                                        <p className="text-sm line-through text-muted-foreground">{product.price.toLocaleString("fa-ir")} تومان</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-left text-base">{product.price.toLocaleString("fa-ir")} تومان</p>
                                            )}
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -right-4 bg-white text-foreground shadow-sm"/>
                        <CarouselNext className="absolute -left-4 bg-white text-foreground shadow-sm"/>
                    </Carousel>
                </div>
            </SectionHeader>
        </div>
    )
}

export default CardSlider
