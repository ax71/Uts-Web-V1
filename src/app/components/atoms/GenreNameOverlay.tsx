const GenreNameOverlay = ({ name }: { name: string }) => (
  <div className="absolute inset-0 bg-opacity-25 flex items-center justify-center">
    <span className="text-white font-semibold text-sm md:text-base">
      {name}
    </span>
  </div>
);

export default GenreNameOverlay;
