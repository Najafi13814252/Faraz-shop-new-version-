import { productAction } from '@/actions/product-actions'
import CardSlider from '@/components/custom/CardSlider'
import { Watch02Icon } from '@hugeicons/core-free-icons'

async function WatchProducts() {
    const {watchProducts} = await productAction()
    return (
        <CardSlider icon={Watch02Icon} title="ساعت هوشمند" variant='default' products={watchProducts}/>
    )
}

export default WatchProducts
