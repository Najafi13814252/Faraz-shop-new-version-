import { ArrowLeft, Discount01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "../ui/button"
import { ReactNode } from "react"

function SectionHeader({ children }: {children: ReactNode}) {
    return (
        <div className="border-[3px] border-foreground rounded-4xl p-4 space-y-4 bg-gray-50/60">
            <div className="rounded-full p-2 w-full flex items-center justify-between bg-foreground">
                <div className="flex items-center gap-x-2">
                    <HugeiconsIcon icon={Discount01Icon} className="size-8 text-white" />
                    <h1 className="text-white font-heading text-2xl">فروش ویژه</h1>
                </div>

                <Button variant="ghost" className="text-white hover:bg-muted-foreground/30 hover:text-white">
                    نمایش همه
                    <HugeiconsIcon icon={ArrowLeft} className="size-4 text-white" />
                </Button>
            </div>

            {children}
        </div>
    )
}

export default SectionHeader
