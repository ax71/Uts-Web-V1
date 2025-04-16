import WhyUsItem from "../molecules/WhyUsItem";
import WhyUsTitle from "../molecules/WhyUsTitle";

const WhyUs = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto space-y-6">
        <WhyUsTitle />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <WhyUsItem
            iconSrc="/icons/Xbox Controller Icon.png"
            iconAlt="Controller"
            text="5000+ video games available"
          />
          <WhyUsItem
            iconSrc="/icons/Xbox Game Store Vector.png"
            iconAlt="Game Store"
            text="Trusted by 100,000+ customers"
          />
          <WhyUsItem
            iconSrc="/icons/Xbox Game Store Logo.png"
            iconAlt="Logo"
            text="Available for all Xbox consoles"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
