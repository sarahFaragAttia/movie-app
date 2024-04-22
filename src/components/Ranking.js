import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import { FaStarHalfAlt } from "react-icons/fa";
const Ranking = ({ item, ...props }) => {


  const integerRank = Math.round(item?.vote_average)
  const ranking = [2, 4, 6, 8, 10]



  return (
    <>
      {ranking.map((element) => {
        if (Number.isInteger(item?.vote_average) && element <= item?.vote_average) {
          return <FaStar {...props} />;
        } else if (Number.isInteger(item?.vote_average) && element > item?.vote_average) {
          return <CiStar {...props} />;
        }
        if (Number.isInteger(item?.vote_average) === false && element < item?.vote_average) {
          return <FaStar {...props} />;
        }
        if (Number.isInteger(item?.vote_average) === false && element > integerRank && element === integerRank + 1) {
          return <FaStarHalfAlt {...props} />;
        }
        if (Number.isInteger(item?.vote_average) === false && element === integerRank) {
          return <FaStar {...props} />;
        }
        if (Number.isInteger(item?.vote_average) === false && element > integerRank) {
          return <CiStar {...props} />;
        }




      }
      )}
    </>
  )

}

export default Ranking;