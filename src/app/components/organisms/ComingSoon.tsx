"use client";

import ComingSoonGrid from "../organisms/ComingSoonGrid";

const ComingSoon = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-12 bg-[#121212] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Coming Soon</h2>
      <ComingSoonGrid />
    </section>
  );
};

export default ComingSoon;
