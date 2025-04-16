const StarRating = ({ count }: { count: number }) => {
  const fullStars = Array(count).fill("★");
  const emptyStars = Array(5 - count).fill("☆");

  return (
    <div className="text-yellow-500 text-lg">
      {fullStars.map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {emptyStars.map((_, i) => (
        <span key={`empty-${i}`}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;
