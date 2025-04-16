import FooterList from "../molecules/FooterList";
import FooterSocials from "../molecules/FooterSocials";

const FooterSection = () => (
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h2 className="text-3xl font-bold text-white">
        <span className="text-blue-600">eX</span>Store
      </h2>
    </div>
    <FooterList
      title="Menu"
      items={["Order tracking", "Store location", "Return policy", "Support"]}
    />
    <FooterList
      title="Resources"
      items={["Blog", "Help center", "Documentation", "Guidelines"]}
    />
    <FooterSocials />
  </div>
);

export default FooterSection;
