import { genres } from "../../data/Genre";
import GenreCard from "../molecules/GenreCard";

const GenreGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    {genres.map((genre, index) => (
      <GenreCard key={index} name={genre.name} image={genre.image} />
    ))}
  </div>
);

export default GenreGrid;
