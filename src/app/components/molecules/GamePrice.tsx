import PriceTag from "../atoms/PriceTag";
import DiscountLabel from "../atoms/DiscountLabel";

const GamePrice = ({
  price,
  discountPrice,
  discount,
}: {
  price: number;
  discountPrice: number;
  discount?: string;
}) => (
  <div className="space-y-1">
    <div className="flex items-center gap-1">
      <PriceTag price={discountPrice} />
      {discount && <DiscountLabel discount={discount} />}
    </div>
    {price !== discountPrice && (
      <span className="line-through text-gray-400 text-[10px] block">
        Rp {price.toLocaleString("id-ID")}
      </span>
    )}
  </div>
);

export default GamePrice;
