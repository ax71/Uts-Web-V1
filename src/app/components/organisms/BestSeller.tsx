"use client";

import BestSellerGrid from "../organisms/BestSellerGrid";

const BestSeller = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Best Seller Games
        </h2>
        <BestSellerGrid />
      </div>
    </section>
  );
};

export default BestSeller;
