import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft } from "@hugeicons/core-free-icons"
import { IconSvgObject } from "../SpecialSale"

export type StepItem = {
    id: number
    label: string | number
    icon?: IconSvgObject
}

function StepList({
    items,
    onSelect,
    showArrow = false,
}: {
    items: StepItem[] | undefined
    onSelect?: (id: number) => void
    showArrow?: boolean
}) {
    return (
        <div className="step-menu">
            <div className="flex flex-col gap-8 pt-4">
                {items?.map(item => (
                    <button
                        key={item.id}
                        className={`flex items-center cursor-pointer ${
                            showArrow ? "justify-between" : "gap-2"
                        }`}
                        onClick={() => onSelect?.(item.id)}
                    >
                        <span className="flex gap-2 items-center">
                            {item.icon && (
                                <HugeiconsIcon className="text-2xl text-blue-700" icon={item.icon} />
                            )}
                            {item.label}
                        </span>
                        {showArrow && <HugeiconsIcon icon={ArrowLeft} className="size-4"/>}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StepList