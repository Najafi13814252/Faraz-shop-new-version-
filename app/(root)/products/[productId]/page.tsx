import { productByIdAction } from "@/actions/product-actions"
import ProductGallery from "./_components/ProductGallery"
import ProductInfo from "./_components/ProductInfo"
import BuyCard from "./_components/BuyCard"

async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params

    const { product } = await productByIdAction(productId)
    return (
        <div className="my-5">
            <div className="w-full flex flex-col md:flex-row items-start gap-4">
                {/* Hero */}
                <div className="w-full md:w-3/4 flex flex-col gap-10">
                    <div className="flex flex-col md:flex-row">
                        <ProductGallery productImgUrl={product?.imageUrl || ''} />
                        <ProductInfo
                            productName={product?.name || ''}
                            productId={product?.id || ''}
                        />
                    </div>
                    <div className="flex flex-col gap-10 bg-red-500 z-20">
                        <div className="md:hidden w-full md:w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl">
                            {/* <BuyCard /> */}
                        </div>
                        {/* <ProductIntroduction sections={productContent.sections} /> */}
                        {/* <SpecsTable specs={productSpecs} /> */}
                        {/* <LazyLoadSections /> */}
                    </div>
                </div>

                <div className="hidden md:block w-full md:w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl sticky top-5">
                    <BuyCard 
                    productPrice={product?.price || 0}
                    productDiscount={product?.discount || 0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product
