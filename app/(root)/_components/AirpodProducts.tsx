import CardSlider from "@/components/custom/CardSlider"
import { prisma } from "@/lib/prisma"
import { Airpod03Icon } from "@hugeicons/core-free-icons"

async function AirpodProducts() {
  const products = await prisma.product.findMany()
  return (
    <div>
      <CardSlider icon={Airpod03Icon} title="هندزفری و ایرپاد" variant="default" products={products} />
    </div>
  )
}

export default AirpodProducts
