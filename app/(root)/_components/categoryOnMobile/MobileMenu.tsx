"use client"

import { useState } from "react"

import categories from "@/data/categories"
import BreadcrumbMenu from "./BreadcrumbMenu"
import StepList from "./StepList"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { menus } from "../Menu"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft, DashboardSquare01Icon } from "@hugeicons/core-free-icons"

// 0 = root, 1 = categories, 2 = filters, 3 = subFilters
type Step = 0 | 1 | 2 | 3

export default function MobileMenu() {
    const [step, setStep] = useState<Step>(0)
    const [categoryId, setCategoryId] = useState<number>()
    const [filterId, setFilterId] = useState<number>()

    const selectedCategory = categories.find(c => c.id === categoryId)
    const selectedFilter = selectedCategory?.categoryFilters.find(f => f.id === filterId)

    const goRoot = () => {
        setStep(0)
        setCategoryId(undefined)
        setFilterId(undefined)
    }
    const goCategories = () => setStep(1)
    const goFilters = (id: number) => {
        setCategoryId(id)
        setFilterId(undefined)
        setStep(2)
    }
    const goSubFilters = (id: number) => {
        setFilterId(id)
        setStep(3)
    }
    // برگشت به یک قدم مشخص از طریق breadcrumb
    const goToStep = (target: Step) => setStep(target)

    const handleOpenChange = (nextOpen: boolean) => {
        if (!nextOpen) {
            goRoot()
        }
    }

    const isShowCategory = step > 0

    return (
        <Sheet onOpenChange={handleOpenChange} >
            <SheetTrigger render={
                <div className="flex flex-col items-center gap-y-2 cursor-pointer">
                    <HugeiconsIcon icon={DashboardSquare01Icon} className="size-5" />
                    دسته‌بندی‌ها
                </div>
            } />
            <SheetContent
                showCloseButton={false}
                side="right"
                dir="rtl"
                className="w-5/6 sm:max-w-sm gap-8 p-5 [&>button]:left-4 [&>button]:right-auto"
            >
                <SheetTitle className="sr-only">منوی موبایل</SheetTitle>

                {step === 0 && (
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between">
                            <button onClick={goCategories} className="flex gap-2 relative">
                                <HugeiconsIcon className="size-5 text-slate-700" icon={DashboardSquare01Icon} />
                                دسته‌بندی‌ها
                            </button>
                            <HugeiconsIcon icon={ArrowLeft} className="size-4" />
                        </div>
                        {menus.map(hc => (
                            <button
                                key={hc.id}
                                className="flex gap-2"
                            >
                                <HugeiconsIcon className={`text-xl ${hc.icon_color} size-5`} icon={hc.icon} />
                                <span className="text-sm">{hc.name}</span>
                            </button>

                        ))}
                    </div>
                )}

                {isShowCategory && (
                    <div className="flex flex-col">
                        <BreadcrumbMenu
                            categoryLabel={selectedCategory?.name}
                            filterLabel={selectedFilter?.label}
                            onRoot={goRoot}
                            onGoTo={goToStep}
                        />

                        {step === 1 && (
                            <StepList
                                items={categories.map(c => ({ id: c.id, label: c.name, icon: c.icon }))}
                                onSelect={goFilters}
                                showArrow
                            />
                        )}

                        {step === 2 && (
                            <StepList
                                items={selectedCategory?.categoryFilters.map(f => ({ id: f.id, label: f.label }))}
                                onSelect={goSubFilters}
                                showArrow
                            />
                        )}

                        {step === 3 && (
                            <StepList
                                items={selectedFilter?.subFilter}
                            />
                        )}
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}