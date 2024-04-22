import { useSelector } from "react-redux"
import UpdateFavList from "../components/UpdateFavList"
import { IoMdHeartDislike } from "react-icons/io";
import Ranking from "../components/Ranking"
import { Link } from "react-router-dom"
const FavouriteList = () => {
    const favourite = useSelector((state) => state.favourite.value.map(item => { return { ...item, fav: true } }))

    return (

        <div className="container-fluid favourite  ">
            <header>
                <h3 className="fw-bold m-4">Watch List</h3>
            </header>
            <div className=" favouriteCards d-flex row    justify-content-between ms-3 me-3" >
                {favourite.length > 0 ? favourite.map((item, index) =>


                    <div key={index} className=" favCard  shadow  mb-2 bg-body-tertiary rounded">
                        <div className="d-flex flex-row justify-content-between ">
                            <Link to={`/movieDetails/${item.id}`}>

                                <div className="image   " style={{ width: "45%" }} >
                                    <img style={{ borderRadius: "20px" }} src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} />
                                </div>
                            </Link>
                            <div className="favDetails ">
                                <div className="d-flex  flex-row justify-content-between" >
                                    <h2 className="fw-bold">{item?.title}</h2>
                                    <div>
                                        <UpdateFavList className="heartIcon" item={item} />
                                    </div>
                                </div>



                                <small className="d-block">{new Date(item.release_date).toLocaleString('default', { month: "long", day: "numeric", year: "numeric" })}</small>
                                <Link to={`/movieDetails/${item.id}`}>
                                    <div className="mb-4 mt-1">
                                        <Ranking item={item} />
                                        <span className="ms-4 ms-md-1 ms-sm-2" >{item.vote_count}</span>
                                    </div>
                                    <p className="ellipsis">{item.overview}</p>
                                </Link>

                            </div>

                        </div>

                    </div>)



                    : <div className="w-50 m-auto align-items-center d-flex flex-column">
                        <IoMdHeartDislike size="200px" fill="gray" />
                        <h3 className="m-4">No movies in watch list</h3>
                        <Link to="/"> <button className="w-100 border-0 rounded m-4 p-2"> Back to Home</button></Link>

                    </div>}

            </div>

        </div>)




}
export default FavouriteList;