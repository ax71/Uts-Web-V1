"use client";

import SectionTitle from "../atoms/SectionTitle";
import SectionSubtitle from "../atoms/SectionSubtitle";
import UserReviewCard from "../molecules/UserReviewCard";
import { reviews } from "../../data/Reviews";

const UserReview = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="12.000+ gamers satisfied" />
        <SectionSubtitle>
          Let’s hear what our customers have to say about their satisfaction
          with our services and products.
        </SectionSubtitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <UserReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReview;
