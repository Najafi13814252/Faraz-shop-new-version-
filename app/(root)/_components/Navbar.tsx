import { Separator } from "@/components/ui/separator"
import Logo from "./Logo"
import Register from "./Register"
import SearchBox from "./SearchBox"

function Navbar() {
    return (
        <div className="space-y-6">
            <div className="mx-auto flex justify-between items-center">
                <SearchBox />
                <Logo />
                <Register />
            </div>
            <Separator className="2sm:hidden"/>
        </div>
    )
}

export default Navbar
