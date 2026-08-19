import Image from "next/image"

function ProductGallery({productImgUrl}: {productImgUrl: string}) {
  return (
    <div className="relative w-120 h-100">
      <Image src={productImgUrl} fill alt={productImgUrl}/>
    </div>
  )
}

export default ProductGallery
