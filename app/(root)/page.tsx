import Image from "next/image";
import CategoryWithImage from "./_components/CategoryWithImage";
import Sliders from "./_components/Sliders";
import SpecialSale from "./_components/SpecialSale";
import WatchProducts from "./_components/WatchProducts";
import AirpodProducts from "./_components/AirpodProducts";

export default function Home() {
  return (
    <div className="space-y-4">
      <Sliders />
      <div className="space-y-10">
        <CategoryWithImage />
        <SpecialSale />

        <section className="grid grid-cols-2 gap-4">
          <div className="relative aspect-3/1">
            <Image src="/images/banner_1.webp" fill alt="banner-1" className="rounded-2xl" />
          </div>
          <div className="relative aspect-3/1">
            <Image src="/images/banner_2.webp" fill alt="banner-2" className="rounded-2xl" />
          </div>
        </section>

        <WatchProducts />

        <div className="relative aspect-6/1">
          <Image src="/images/banner_3.webp" fill alt="banner-3" className="rounded-2xl" />
        </div>

        <AirpodProducts />
      </div>
    </div>
  );
}
