const formatRupiah = (value: number) => {
  return `Rp ${value.toLocaleString("id-ID")}`;
};

const Price = ({ price }: { price: number }) => {
  return (
    <span className="text-indigo-600 font-semibold text-sm">
      {formatRupiah(price)}
    </span>
  );
};

export default Price;
