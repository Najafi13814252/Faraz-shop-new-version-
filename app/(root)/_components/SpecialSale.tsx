import CardSlider from "@/components/custom/CardSlider"
import { Discount01Icon } from "@hugeicons/core-free-icons"

export type IconSvgObject = typeof Discount01Icon

function SpecialSale() {
  return (
    <div>
      <CardSlider icon={Discount01Icon} title="فروش ویژه" variant="special"/>
    </div>
  )
}

export default SpecialSale
