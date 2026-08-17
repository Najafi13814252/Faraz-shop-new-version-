import { ArrowLeft } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "../ui/button"
import { ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { IconSvgObject } from "@/app/(root)/_components/SpecialSale"
import { cn } from "@/lib/utils"

const sectionHeaderVariants = cva(
    "w-full flex items-center justify-between",
    {
        variants: {
            variant: {
                default: "bg-transparent border-b border-b-gray-200 rounded-none text-primary py-3",
                special: "bg-foreground rounded-full text-white p-2"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

interface SectionHeaderProps extends VariantProps<typeof sectionHeaderVariants> {
    children: ReactNode
    icon: IconSvgObject
    title: string
}

function SectionHeader({ children, icon, title, variant }: SectionHeaderProps) {
    return (
        <div className={cn(
            "border-[3px] rounded-4xl space-y-4 bg-gray-50",
            variant === 'default' ? 'border-primary px-4 pb-4' : 'border-foreground p-4'
        )}>
            <div className={cn(sectionHeaderVariants({variant}))}>
                <div className="flex items-center gap-x-2">
                    <HugeiconsIcon icon={icon} className="size-7.5" />
                    <h1 className="font-heading text-xl">{title}</h1>
                </div>

                <Button variant="ghost" className="hover:bg-muted-foreground/30 hover:text-white">
                    نمایش همه
                    <HugeiconsIcon icon={ArrowLeft} className="size-4" />
                </Button>
            </div>

            {/* اسلایدر کارت‌ها */}
            {children}
        </div>
    )
}

export default SectionHeader
