"use client"

import { cn } from "@/lib/utils"
import { DashboardSquare01Icon, Home, Login, ShoppingBag03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import MobileMenu from "./categoryOnMobile/MobileMenu"

function MobileFooter() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const isActive = pathname === '/'
    return (
        <>
            <div className="lg:hidden sticky bottom-0 w-full z-50">
                <ul className="text-white bg-primary/95 px-4 py-2 shadow-lg rounded-2xl flex items-center justify-between">
                    <li className="flex flex-col items-center gap-y-2 cursor-pointer">
                        <HugeiconsIcon icon={Home} className={cn(
                            "size-6",
                            isActive ? 'fill-white text-primary' : ''
                        )} />
                        خانه
                    </li>
                    <li className="flex flex-col items-center gap-y-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                        <HugeiconsIcon icon={DashboardSquare01Icon} className="size-5" />
                        دسته‌بندی‌ها
                    </li>
                    <li className="flex flex-col items-center gap-y-2 cursor-pointer">
                        <HugeiconsIcon icon={ShoppingBag03Icon} className="size-5" />
                        سبد خرید
                    </li>
                    <li className="flex flex-col items-center gap-y-2 cursor-pointer">
                        <HugeiconsIcon icon={Login} className="size-5" />
                        پروفایل
                    </li>
                </ul>
            </div>

            {isOpen && (
                <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} />
            )}
        </>
    )
}

export default MobileFooter
