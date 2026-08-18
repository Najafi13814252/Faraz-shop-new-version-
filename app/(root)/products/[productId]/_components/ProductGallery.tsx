import Image from "next/image"

function ProductGallery({productImgUrl}: {productImgUrl: string}) {
  return (
    <div className="relative w-80 aspect-square">
      <Image src={productImgUrl} fill alt={productImgUrl}/>
    </div>
  )
}

export default ProductGallery
