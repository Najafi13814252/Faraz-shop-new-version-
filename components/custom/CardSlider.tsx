import { products } from "@/data/products"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import SectionHeader from "./SectionHeader"
import ProductCard from "./ProductCard"
import { IconSvgObject } from "@/app/(root)/_components/SpecialSale"

interface CardSliderProps {
    icon: IconSvgObject
    title: string
    variant?: 'default' | 'special'
}

function CardSlider({icon, title, variant}: CardSliderProps) {
    return (
        <div>
            <SectionHeader icon={icon} title={title} variant={variant}>
                <div>
                    <Carousel
                        opts={{
                            align: "start",
                            direction: "rtl"
                        }}
                        className="w-full relative"
                    >
                        <CarouselContent className="-mr-3">
                            {products.map(product => (
                                <CarouselItem key={product.id} className="lg:basis-1/5 pr-3">
                                    <ProductCard {...product} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/* <CarouselPrevious className="absolute -right-4 bg-white text-foreground shadow-sm" />
                        <CarouselNext className="absolute -left-4 bg-white text-foreground shadow-sm" /> */}
                    </Carousel>
                </div>
            </SectionHeader>
        </div>
    )
}

export default CardSlider
