import UserAvatar from "../atoms/UserAvatar";
import UserName from "../atoms/UserName";
import ReviewContent from "../atoms/ReviewContent";
import StarRating from "../atoms/StarRating";

type Props = {
  avatar: string;
  name: string;
  rating: number;
  content: string;
};

const UserReviewCard = ({ avatar, name, rating, content }: Props) => (
  <div className="bg-white rounded-xl shadow-md px-6 py-8 text-center transition hover:shadow-xl">
    <UserAvatar src={avatar} alt={name} />
    <UserName name={name} />
    <StarRating count={rating} />
    <ReviewContent content={content} />
  </div>
);

export default UserReviewCard;
