import Image from "next/image"
import Link from "next/link"

type CategoryShape = {
    id: number
    img: string
    title: string
    categoryName: string
}

const categories: CategoryShape[] = [
    { id: 1, img: '/images/mob.png', title: 'موبایل', categoryName: 'mobile' },
    { id: 2, img: '/images/lap.png', title: 'لپ تاپ', categoryName: 'laptop' },
    { id: 3, img: '/images/watch.png', title: 'ساعت هوشمند', categoryName: 'watch' },
    { id: 4, img: '/images/tablet-i.webp', title: 'تبلت', categoryName: 'tablet' },
    { id: 5, img: '/images/head.png', title: 'هندزفری و ایرپاد', categoryName: 'airpod' }
]

export default function CategoryWithImage() {
    return (
        <div className="mt-8 grid grid-cols-3 sm:flex sm:items-center sm:justify-between p-2 md:p-0 gap-6 overflow-x-scroll overflow-y-hidden md:overflow-visible">
            {categories.map(category => (
                <Link href={`/product-category/${category.categoryName}`} className="flex flex-col shrink-0 items-center gap-3.5 cursor-pointer hover:scale-110 duration-200" key={category.id}>
                    <Image className="w-20 h-20 md:w-32 md:h-32" src={category.img} width={128} height={128} alt={category.title} />
                    <span className="text-xs md:text-base font-medium">{category.title}</span>
                </Link>
            ))}
        </div>
    )
}
