import { productAction } from "@/actions/product-actions"
import CardSlider from "@/components/custom/CardSlider"
import { Discount01Icon } from "@hugeicons/core-free-icons"

export type IconSvgObject = typeof Discount01Icon

async function SpecialSale() {
  const {products} = await productAction()
  return (
    <div>
      <CardSlider icon={Discount01Icon} title="فروش ویژه" variant="special" products={products}/>
    </div>
  )
}

export default SpecialSale
