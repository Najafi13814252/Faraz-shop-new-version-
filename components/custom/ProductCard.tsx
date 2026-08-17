import Image from "next/image"
import { Card } from "../ui/card"
import { Product } from "@/types/product"

function ProductCard({img, name, off, price}: Product) {
    return (
        <div className="p-0.5 h-full">
            <Card className="h-full flex flex-col p-3 cursor-pointer hover:bg-gray-100 duration-200">
                <div className="relative w-44 mx-auto aspect-square">
                    <Image src={img} alt={name} fill className="object-cover" />
                </div>
                <div className="w-full flex-1">
                    <p className="line-clamp-2 font-medium font-arad text-sm w-full">{name}</p>
                </div >
                {off > 0 ? (
                    <div className="flex items-center justify-between">
                        <p className="bg-red-500 rounded px-2 py-0.5 text-white">{off}%</p>

                        <div className="text-left">
                            <p className="text-base">{((price - (price * off / 100)).toLocaleString("fa-IR"))} تومان</p>
                            <p className="text-sm line-through text-muted-foreground">{price.toLocaleString("fa-ir")} تومان</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-left text-base">{price.toLocaleString("fa-ir")} تومان</p>
                )}
            </Card>
        </div>
    )
}

export default ProductCard
