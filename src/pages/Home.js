import axios from "axios"
import { useState, useEffect } from "react"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import { Link } from "react-router-dom"
import UpdateFavList from "../components/UpdateFavList"
import { useSelector } from "react-redux"

const Home = () => {


  const [movieList, setMovieList] = useState()
  const [pageNo, SetPageNo] = useState()

  const handlePageCount = (pageNumber) => {
    SetPageNo(pageNumber)



  }

  const favourite = useSelector((state) => state.favourite.value)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8abb3a146fcce22c35ce89e53a42f5d1&page=${pageNo}`)
    .then((data) => {
      const updatedMovieList = data.data.results.map((item) => {
        const isFavorite = favourite.some((favItem) => favItem.id === item.id);
        return { ...item, fav: isFavorite };
      });
      setMovieList(updatedMovieList);
    })
    .catch((error) => {
      console.error("Fetching Error:", error);
    })
  }, [pageNo, favourite]);


  return (
    <div className="container-fluid ">
      <div className="m-4">
        <header className="bg-secondary-subtle  text-start m p-4  rounded w-100">
          <h1 className="fw-bold">Welcome to our Movie-app</h1>
          <p className="fs-6 fw-normal m-4  ">Millions of movies,TV shows and people to discover,Explore now.</p>
          <Search />
        </header>
        <h2 className="fw-bold" style={{ marginTop: "50px", marginBottom: "50px" }}>Popular Movies </h2>
        <div className="row ">
          {movieList && movieList.map((item, index) =>
            <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 ">
              <div className="card border-0 " key={index} >
                <Link to={`/movieDetails/${item?.id}`} >

                  <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} class="card-img-top" />
                </Link>
                <div class="card-body">
                  <Link to={`/movieDetails/${item?.id}`} >

                    <p class="card-text fw-bold m-0 " style={{ color: '#292D32' }}>{item?.title}</p>
                  </Link>

                  <div className="d-flex  flex-row justify-content-between">

                    {/* change date style */}
                    <p class="card-text ">{new Date(item?.release_date).toLocaleString('default', { month: "long", day: "numeric", year: "numeric" })}</p>
                    <div>


                      {/* {item.fav?<IoHeart  color="#FFE353" />:<FaRegHeart    />} */}
                      <UpdateFavList size="25px" item={item} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Pagination onAdd={handlePageCount} />
      </div>
    </div>
  )





}
export default Home;