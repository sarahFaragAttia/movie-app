import { useSelector, useDispatch } from "react-redux"
import { addMovie, removeMovie } from "../reduxStore/FavouriteSlice"
import { IoHeart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";

const UpdateFavList = ({ item, ...props }) => {
    const favourite = useSelector((state) => state.favourite?.value)
    const dispatch = useDispatch()

    useEffect(() => localStorage.setItem('FavList', JSON.stringify(favourite)), [favourite])

    const handleClick = () => {
        console.log(item.fav)

        if (item?.fav) {
            const el = favourite.find(element => element.id === item.id)

            const index = favourite.indexOf(el)

            dispatch(removeMovie(index))
            console.log(favourite)
        }
        !item?.fav && dispatch(addMovie(item))
    }
    console.log(favourite)
    return (
        <>
            {item?.fav ?
                <IoHeart fill="#FFE353" onClick={handleClick} {...props} /> : <FaRegHeart onClick={handleClick} {...props} />}

        </>
    )

}
export default UpdateFavList;
