import { cn } from "@/lib/utils"
import { Discount01Icon, Fire03Icon, Info, PhoneCall, Question, Wallet02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const menus = [
    { id: 1, name: "پرسش‌های متداول", icon: Question, icon_color: "text-green-500" },
    { id: 2, name: "درباره ما", icon: Info, icon_color: "text-blue-500" },
    { id: 3, name: "جشنواره تخفیف", icon: Discount01Icon, icon_color: "text-red-500" },
    { id: 4, name: "پرفروش‌ترین‌ها", icon: Fire03Icon, icon_color: "text-orange-500" },
    { id: 5, name: "خرید اقساطی", icon: Wallet02Icon, icon_color: "text-purple-500" }
]

function Menu() {
    return (
        <div className="hidden lg:flex items-center justify-between bg-foreground px-4 py-3 rounded-full">
            <div className="text-white flex items-center gap-x-8">
                {menus.map(menu => (
                    <div key={menu.id} className="flex items-center gap-x-2">
                        <HugeiconsIcon icon={menu.icon} className={cn("size-5", menu.icon_color)} />
                        <p>{menu.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-x-2 text-white">
                021-12345678
                <HugeiconsIcon icon={PhoneCall} className="size-5 text-white" />
            </div>
        </div>
    )
}

export default Menu
