import { Package, ShieldCheck, TruckDeliveryIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

interface BuyCardProps {
    productPrice: number
    productDiscount: number
}

function BuyCard({ productPrice, productDiscount }: BuyCardProps) {
    return (
        <div className="text-sm">
            <section className="flex flex-col gap-5 border-b border-b-gray-300 pb-5">
                <div className="flex items-center gap-2">
                    <div className="bg-sky-500/10 rounded-full p-1">
                        <HugeiconsIcon className="text-2xl text-sky-500" icon={Package} />
                    </div>
                    <span>آماده ارسال به سراسر کشور</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-purple-500/10 rounded-full p-1">
                        <HugeiconsIcon className="text-2xl text-purple-500" icon={TruckDeliveryIcon} />
                    </div>
                    <span>ارسال امروز به <span className="text-purple-500">تهران و کرج</span></span>
                </div>
            </section>

            <section className="hidden md:flex flex-col gap-4 py-5 border-b border-b-gray-300">
                <div className="flex items-center justify-between">
                    {/* تعداد */}
                    <div className="bg-white border border-gray-300 px-4 py-2 flex items-center gap-6 rounded-lg text-xl">
                        <button className="cursor-pointer">+</button>
                        <span>1</span>
                        <button className="cursor-pointer">-</button>
                    </div>
                    {/* قیمت */}
                    {productDiscount > 0 ? (
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-2 ">
                                <p className="line-through text-gray-400">{(productPrice).toLocaleString("fa-ir")}</p>
                                <p className="bg-red-500 text-white px-2 py-1 rounded-md">{productDiscount}%</p>
                            </div>
                            {/* قیمت با احتساب تخفیف */}
                            <p className="text-2xl font-semibold text-gray-700">{(productPrice - ((productPrice * productDiscount) / 100)).toLocaleString('fa-ir')} <span className="text-sm text-gray-600 font-normal">تومان</span></p>
                        </div>
                    ) : (
                        <p className="text-2xl font-semibold text-gray-700">{productPrice.toLocaleString('fa-ir')} <span className="text-sm text-gray-600 font-normal">تومان</span></p>
                    )}
                </div>
                <button className="bg-primary text-white font-medium rounded-md py-3.5 cursor-pointer">افزودن به سبد خرید</button>
                <div className="flex items-center gap-2 font-medium text-xs text-orange-600">
                    <HugeiconsIcon className="text-xl" icon={ShieldCheck} />
                    <span>گارانتی 18 ماهه و تضمین سلامت فراز شاپ</span>
                </div>
            </section>

            <section className="mt-5">
                <button className="w-full flex gap-4 bg-linear-to-r from-green-500 to-green-600 px-2 py-3 rounded-md cursor-pointer">
                    <img src="/images/aghsat.png" className="w-12" alt="Aghsat" />
                    <div className="flex flex-col items-start gap-2 text-white font-medium text-sm">
                        <span>خرید اقساطی به همراه دسته چک!</span>
                        <span className="text-xs">انتخاب و پرداخت با کارمزد 4.5%</span>
                    </div>
                </button>
            </section>
        </div>
    )
}

export default BuyCard
