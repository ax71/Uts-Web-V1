const DiscountBadge = ({
  discount,
  originalPrice,
}: {
  discount: number;
  originalPrice: number;
}) => {
  const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

  return (
    <div className="flex items-center gap-1">
      <span className="bg-pink-100 text-pink-600 text-[11px] font-semibold px-1.5 py-0.5 rounded">
        {discount}%
      </span>
      <span className="line-through text-gray-400 text-xs">
        {formatRupiah(originalPrice)}
      </span>
    </div>
  );
};

export default DiscountBadge;
