import { Fragment } from "react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft } from "@hugeicons/core-free-icons"

// step: 1 = categories, 2 = filters, 3 = subFilters
function BreadcrumbMenu({
    categoryLabel,
    filterLabel,
    onRoot,
    onGoTo,
}: {
    categoryLabel?: string
    filterLabel?: string
    onRoot: () => void
    onGoTo: (step: 1 | 2 | 3) => void
}) {
    const items = [
        categoryLabel && { label: categoryLabel, step: 2 as const },
        filterLabel && { label: filterLabel, step: 3 as const },
    ].filter(Boolean) as { label: string; step: 1 | 2 | 3 }[]

    return (
        <Breadcrumb dir="rtl" className="pb-2 border-b border-b-gray-300 z-10">
            <BreadcrumbList className="text-sm flex-nowrap">
                <BreadcrumbItem>
                    <BreadcrumbLink render={
                        <button type="button" className="cursor-pointer" onClick={onRoot}>
                            دسته‌بندی‌ها
                        </button>
                    }>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {items.length > 0 && (
                    <BreadcrumbSeparator>
                        <HugeiconsIcon icon={ArrowLeft} />
                    </BreadcrumbSeparator>
                )}

                {items.map((item, i) => {
                    const isLast = i === items.length - 1
                    return (
                        <Fragment key={item.step}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink render={
                                        <button
                                            type="button"
                                            className="cursor-pointer"
                                            onClick={() => onGoTo(item.step)}
                                        >
                                            {item.label}
                                        </button>
                                    }>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && (
                                <BreadcrumbSeparator>
                                    <HugeiconsIcon icon={ArrowLeft} />
                                </BreadcrumbSeparator>
                            )}
                        </Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbMenu