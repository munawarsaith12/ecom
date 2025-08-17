import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalf } from "react-icons/fa6";

interface StarsProps {
  rating: number; // Make sure rating is a number, not a string
}

const Stars: React.FC<StarsProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const half = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= half ? (
          <FaStarHalf />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return <div className="flex text-yellow-500 text-xl">{stars}</div>;
};

export default Stars;
