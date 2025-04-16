const PriceTag = ({ price }: { price: number }) => (
  <span className="text-blue-700 font-bold text-xs">
    Rp {price.toLocaleString("id-ID")}
  </span>
);

export default PriceTag;
