"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import categories from "@/data/categories"
import { cn } from "@/lib/utils"
import { MenuSquareIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { useState } from "react"

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="p-0 hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent">
                        <div className="flex items-center gap-x-2">
                            <HugeiconsIcon icon={MenuSquareIcon} className="size-4 text-white" />
                            دسته‌بندی‌ها
                        </div>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <div className="flex w-180">
                            {/* منوهای اصلی */}
                            <ul className="grid w-1/3 pl-2">
                                <li >
                                    {categories.map((category, index) => (
                                        <NavigationMenuLink key={category.id} onMouseEnter={() => setActiveIndex(index)} className={cn(
                                            "group hover:bg-primary group-hover:text-white group-hover:shadow-none",
                                            activeIndex === index ? "bg-primary text-white" : ""
                                        )} render={
                                            <Link href="#" className="flex-row items-center gap-2">
                                                <div className="bg-gray-50 shadow-inner rounded-full p-2 group-hover:bg-white">
                                                    <HugeiconsIcon icon={category.icon} className="size-5 text-primary" />
                                                </div>
                                                <p className="font-medium group-hover:text-white">{category.name}</p>
                                            </Link>
                                        } />
                                    ))}

                                </li>
                            </ul>
                            {/* زیر منوها */}
                            <div className="flex py-2 w-2/3  bg-gray-100 rounded-2xl">
                                {categories[activeIndex].categoryFilters.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-y-2 items-start px-4 py-2 mx-auto">
                                        <div className="font-medium text-primary">
                                            {item.label}
                                        </div>

                                        <ul className="space-y-4">
                                            {item.subFilter.map(sub => (
                                                <li key={sub.id} className="hover:text-primary duration-200 text-muted-foreground text-sm cursor-pointer">{sub.label}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Categories
