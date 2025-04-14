import Image from "next/image";
import Link from "next/link";

const genres = [
  {
    name: "Strategy",
    image: "/images/bg-image.png",
  },
  {
    name: "FPS",
    image: "/images/bg-image-2.png",
  },
  {
    name: "RPG",
    image: "/images/bg-image-3.png",
  },
  {
    name: "Puzzle",
    image: "/images/bg-image-4.png",
  },
  {
    name: "Role Playing",
    image: "/images/bg-image-5.png",
  },
  {
    name: "Sports",
    image: "/images/bg-image-6.png",
  },
];

const Genre = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Games Genres
          </h2>
          <Link
            href="/genres"
            className="text-blue-600 font-semibold hover:underline"
          >
            See all genres
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="relative w-full h-36 rounded-xl overflow-hidden shadow-md group"
            >
              <Image
                src={genre.image}
                alt={genre.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-opacity-25 flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base">
                  {genre.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genre;
