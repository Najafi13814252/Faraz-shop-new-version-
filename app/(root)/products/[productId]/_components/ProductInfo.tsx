import { attributeAction } from "@/actions/attribute-actions"
import { ArrowLeft, Star } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

// const features = [
//     { id: 1, title_1: 'حافظه داخلی', title_2: '128 گیگابایت' },
//     { id: 2, title_1: 'حافظه RAM', title_2: '6 گیگابایت' },
//     { id: 3, title_1: 'سایز صفحه‌نمایش', title_2: '6.88 اینچ' },
//     { id: 4, title_1: 'ظرفیت باتری', title_2: '5200 میلی‌آمپر‌ساعت' },
//     { id: 5, title_1: 'نسخه سیستم‌عامل', title_2: 'Android 14' },
//     { id: 6, title_1: 'رزولوشن دوربین اصلی', title_2: '50 مگاپیکسل' }
// ]

interface ProductInfoProps {
    productName: string
    productId: string
}

async function ProductInfo({ productName, productId }: ProductInfoProps) {
    const {requiredProductAttribute} = await attributeAction(productId)
    return (
        <div>
            <div className="flex flex-col gap-6">
                {/* اسم محصول */}
                <section className="flex flex-col gap-4 border-b border-b-gray-200 pb-4">
                    <h1 className="font-medium text-lg">{productName}</h1>
                    <span className="text-gray-500 text-sm">Samsung Galaxy Watch5 44mm Smartwatch</span>
                </section>

                {/* اطلاعات محصول */}
                <section className="flex flex-col gap-4">
                    {/* امتیازات */}
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <div className="flex items-center gap-1">
                            <HugeiconsIcon className="fill-yellow-400 size-5 text-yellow-400" icon={Star} />
                            <span>4.6</span>
                            <span className="text-gray-400 text-xs">(امتیاز ۳۰۸ خریدار)</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-fit flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-2 py-1.5 text-xs">
                                <span>185 دیدگاه</span>
                                <HugeiconsIcon icon={ArrowLeft} className="size-4" />
                            </button>
                            <button className="w-fit flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-2 py-1.5 text-xs">
                                <span>74 پرسش</span>
                                <HugeiconsIcon icon={ArrowLeft} className="size-4" />
                            </button>
                        </div>
                    </div>

                    {/* رنگ */}
                    <div className="flex flex-col gap-4">
                        <span className="font-medium">رنگ: نارنجی</span>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 w-fit">
                            <div className="w-5 h-5 rounded-full bg-orange-500"></div>
                            <span className="text-sm">نارنجی</span>
                        </div>
                    </div>
                </section>

                {/* ویژگی‌های محصول */}
                <section className="flex flex-col gap-4">
                    <span className="font-medium">ویژگی‌ها</span>

                    <div className="md:grid md:grid-cols-3 flex whitespace-nowrap overflow-x-auto gap-2">
                        {requiredProductAttribute.map(feature => (
                            <div className="bg-gray-200/50 rounded-md px-4 py-2 md:py-2.5 flex flex-col gap-1.5 text-xs" key={feature.id}>
                                <span className="text-gray-500">{feature.attribute.name}</span>
                                <span className="text-gray-800">{feature.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-neutral-quaternary border-0 bg-gray-200/60" />
                        <div className="absolute px-3 font-medium text-heading bg-white">
                            <button className="px-4 py-3 flex items-center gap-2 border border-gray-300 rounded-lg text-xs">
                                مشاهده همه ویژگی‌ها
                                <HugeiconsIcon icon={ArrowLeft} className="size-4" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductInfo
