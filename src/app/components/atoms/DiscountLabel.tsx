const DiscountLabel = ({ discount }: { discount: string }) => (
  <span className="text-pink-600 font-bold bg-pink-50 text-[10px] px-1 py-0.5 rounded">
    {discount}
  </span>
);

export default DiscountLabel;
