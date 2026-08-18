import Image from "next/image"
import { Card } from "../ui/card"
import { Product } from "@/lib/generated/prisma/client"
import Link from "next/link"

function ProductCard({id, imageUrl, name, discount, price }: Product) {
    return (
        <Link href={`/products/${id}`}>
            <div className="p-0.5 h-full">
                <Card className="h-full flex flex-col p-3 cursor-pointer hover:bg-gray-100 duration-200">
                    <div className="relative w-44 mx-auto aspect-square">
                        <Image src={imageUrl} alt={name} fill className="object-cover" />
                    </div>
                    <div className="w-full flex-1">
                        <p className="line-clamp-2 font-medium font-arad text-sm w-full">{name}</p>
                    </div >
                    {discount! > 0 ? (
                        <div className="flex items-center justify-between">
                            <p className="bg-red-500 rounded px-2 py-0.5 text-white">{discount}%</p>

                            <div className="text-left">
                                <p className="text-base">{((price - (price * discount! / 100)).toLocaleString("fa-IR"))} تومان</p>
                                <p className="text-sm line-through text-muted-foreground">{price.toLocaleString("fa-ir")} تومان</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-left text-base">{price.toLocaleString("fa-ir")} تومان</p>
                    )}
                </Card>
            </div>
        </Link>
    )
}

export default ProductCard
