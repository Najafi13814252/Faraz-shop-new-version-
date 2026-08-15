import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Search } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

function SearchBox() {
    return (
        <>
            {/* حالت موبایل */}
            <Button size="icon" className="2sm:hidden bg-foreground">
                <HugeiconsIcon icon={Search} className="size-5! text-white" />
            </Button>

            {/* حالت دستگاه */}
            <Field orientation="horizontal" className="relative hidden 2sm:block 2sm:max-w-60 ">
                <div className="bg-foreground p-2 rounded-full absolute right-1 top-0.5">
                    <HugeiconsIcon icon={Search} className="w-5 h-5 text-white" />
                </div>
                <Input type="search" placeholder="جستجو..." className="py-5 pr-12" />
            </Field>
        </>
    )
}

export default SearchBox
