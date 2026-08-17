import { links } from "@/data/links";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-10 w-full pt-10 px-4 pb-20 mb-16 lg:mb-4 bg-gray-900 rounded-4xl">
            <div className="flex flex-col md:flex-row gap-16 items-center text-white">
                {/* introduction */}
                <div className="flex flex-col gap-6">
                    <Link href="/">
                        <h1 className="text-4xl font-black font-heading text-blue-700">فراز <span className="text-white">شاپ</span></h1>
                    </Link>

                    <p className="w-full md:w-80">
                        در فروشگاه آنلاین ما، بهترین مدل‌های موبایل و لپ‌تاپ از برندهای معتبر جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم آورده‌ایم. با انتخاب محصولات ما، تجربه‌ای حرفه‌ای و لذت‌بخش از فناوری را در خانه یا محل کار داشته باشید.
                    </p>

                    <div className="flex items-center gap-4">
                        {links.apps.map((app) => (
                            <div
                                key={app.id}
                                className="flex items-center p-2 rounded-full bg-blue-700 cursor-pointer hover:scale-125 duration-200"
                            >
                                {app.icon_name && <HugeiconsIcon className="text-white text-xl" icon={app.icon_name} />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* lists */}
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-40 w-full">
                    {/* quick links */}
                    <li className="flex flex-col gap-1">
                        <span className="mb-2 font-heading">لینک‌های سریع</span>
                        {links.quick.map((qu) => (
                            <ul
                                key={qu.id}
                                className="flex items-center gap-2 cursor-pointer hover:text-blue-700 duration-200"
                            >
                                <HugeiconsIcon icon={ArrowLeft02Icon} className="size-4" />
                                <span>{qu.title}</span>
                            </ul>
                        ))}
                    </li>

                    {/* useful links */}
                    <li className="flex flex-col gap-1">
                        <span className="mb-2 font-heading">لینک‌های کاربردی</span>
                        {links.useful.map((use) => (
                            <ul
                                key={use.id}
                                className="flex items-center gap-2 cursor-pointer hover:text-blue-700 duration-200"
                            >
                                <HugeiconsIcon icon={ArrowLeft02Icon} className="size-4" />
                                <span>{use.title}</span>
                            </ul>
                        ))}
                    </li>

                    {/* contact us */}
                    <li className="flex flex-col gap-3">
                        <span className="mb-2 font-heading">ارتباط با ما</span>
                        {links.concat.map((us) => (
                            <ul key={us.id} className="flex items-center gap-2">
                                {us.icon_name && <HugeiconsIcon icon={us.icon_name} className="size-4" />}
                                <span>{us.title}</span>
                            </ul>
                        ))}
                    </li>
                </ul>
            </div>
        </footer>
    );
}