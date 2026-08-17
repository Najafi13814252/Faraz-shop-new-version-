import Footer from "./_components/Footer"
import MobileFooter from "./_components/MobileFooter"
import Navbar from "./_components/Navbar"

function layout({ children }: LayoutProps<"/">) {
    return (
        <div className="py-6">
            <Navbar />
            <main className="py-4">
                {children}
            </main>
            <Footer />
            <MobileFooter />
        </div>
    )
}

export default layout
