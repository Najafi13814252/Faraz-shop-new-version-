import Link from "next/link"

function Logo() {
    return (
        <Link href="/" className="space-y-0.5 text-center">
            <h1 className="font-heading text-3xl 2sm:text-4xl text-primary text-center">فراز<span className="text-foreground"> شاپ</span></h1>
            <span className="text-muted-foreground text-xs 2sm:text-sm">فروشگاه لوازم دیجیتال</span>
        </Link>
    )
}

export default Logo
