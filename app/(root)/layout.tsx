import Navbar from "./_components/Navbar"

function layout({ children }: LayoutProps<"/">) {
    return (
        <div className="py-6">
            <Navbar />
            <main className="py-4">
                {children}
            </main>
        </div>
    )
}

export default layout
