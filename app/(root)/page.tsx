import CategoryWithImage from "./_components/CategoryWithImage";
import Menu from "./_components/Menu";
import Sliders from "./_components/Sliders";
import SpecialSale from "./_components/SpecialSale";

export default function Home() {
  return (
    <div className="space-y-4">
      <Menu />
      <Sliders />
      <div className="space-y-4">
        <CategoryWithImage />
        <SpecialSale />
      </div>
    </div>
  );
}
