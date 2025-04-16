import GenreTitle from "../atoms/GenreTitle";
import GenreLink from "../atoms/GenreLink";
import GenreGrid from "../organisms/GenreGrid";

const GenreSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <GenreTitle />
          <GenreLink />
        </div>
        <GenreGrid />
      </div>
    </section>
  );
};

export default GenreSection;
