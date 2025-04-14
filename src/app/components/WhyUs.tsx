import React from "react";
import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why eXStore?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are the official Xbox partner in Indonesia that provides official
          video games.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
              <Image
                src="/icons/Xbox Controller Icon.png"
                width={50}
                height={50}
                alt="Icon 1"
              />
            </div>
            <p className="text-gray-800 font-semibold">
              5000+ video games available
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
              <Image
                src="/icons/Xbox Game Store Vector.png"
                width={50}
                height={50}
                alt="Icon 1"
              />
            </div>
            <p className="text-gray-800 font-semibold">
              Trusted by 100,000+ customers
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full">
              <Image
                src="/icons/Xbox Game Store Logo.png"
                width={50}
                height={50}
                alt="Icon 1"
              />
            </div>
            <p className="text-gray-800 font-semibold">
              Available for all Xbox consoles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
