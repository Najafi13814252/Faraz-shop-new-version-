import { Button } from "@/components/ui/button"
import { Login, PhoneCall, ShoppingBag03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

function Register() {
    return (
        <>
            <Button variant="outline" size="icon" className="2sm:hidden border border-primary bg-white">
                <HugeiconsIcon icon={PhoneCall} className="size-5! text-primary" />
            </Button>

            <div className="hidden 2sm:flex items-center gap-x-2">
                <Button variant="outline" className="font-normal text-base">
                    <HugeiconsIcon icon={Login} className="size-5! rotate-180" />
                    ورود | ثبت‌نام
                </Button>

                <Button variant="default" size="icon">
                    <HugeiconsIcon icon={ShoppingBag03Icon} className="size-5!" />
                </Button>
            </div>
        </>
    )
}

export default Register
