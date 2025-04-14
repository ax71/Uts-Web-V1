"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Putu K1",
    avatar: "/user/user.jpg",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
  },
  {
    name: "Kadek K2",
    avatar: "/user/user.jpg",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
  },
  {
    name: "Komang K3",
    avatar: "/user/user.jpg",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo vitae ipsum vestibulum porta.",
  },
];

const StarRating = ({ count }: { count: number }) => {
  const fullStars = Array(count).fill("★");
  const emptyStars = Array(5 - count).fill("☆");
  return (
    <div className="text-yellow-500 text-lg">
      {fullStars.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
      {emptyStars.map((star, i) => (
        <span key={i + count}>{star}</span>
      ))}
    </div>
  );
};

const UserReviewSection = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          12.000+ gamers satisfied
        </h2>
        <p className="text-gray-500 mb-12">
          Let’s hear what our customers have to say about their satisfaction
          with our services and products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md px-6 py-8 text-center transition hover:shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">
                {review.name}
              </h3>
              <StarRating count={review.rating} />
              <p className="text-sm text-gray-600 mt-3">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviewSection;
