


import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Pagination from "../components/Pagination"
import Search from "../components/Search"
import UpdateFavList from "../components/UpdateFavList"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const SearchMovieName = () => {
  const [searchMovieList, setSearchMovieList] = useState()
  const [pageNo, setPageNo] = useState()
  const params = useParams()


  const favourite = useSelector((state) => state.favourite.value)

  const handlePageNo = (pageNumber) => {
    setPageNo(pageNumber)
  }
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8abb3a146fcce22c35ce89e53a42f5d1&page=${pageNo}&query=${params.movieName}`)
      .then(data => {


        setSearchMovieList(() => (data.data.results).map(item =>
          favourite.some(element => element.id === item.id) ? { ...item, fav: true } : { ...item, fav: false }


        ))
      })
      .catch(error => { console.log("FetchingError", error) })
  }, [pageNo, params, favourite])


  console.log(favourite)

  return (
    <div className="container">
      <Search />
      <div style={{ fontSize: "25px" }}>
        <p className="mt-4 mb-4 fw-bold" style={{ fontSize: "2rem" }}> Search result for:<span className="fw-normal" >{params.movieName} </span></p>
      </div>
      <div className="row ">

        {searchMovieList?.length > 0 && searchMovieList.map((item, index) =>
          <div className=" col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 ">
            <div className="card border-0  " key={index} >
              <Link to={`/movieDetails/${item.id}`} >

                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" />
              </Link>
              <div class="card-body">
                <Link to={`/movieDetails/${item.id}`} >

                  <p class="card-text fw-bold">{item.title}</p>
                </Link>
                <div className="d-flex  flex-row justify-content-between">

                  {/* change date style */}
                  <p class="card-text ">{new Date(item.release_date).toLocaleString('default', { month: "long", day: "numeric", year: "numeric" })}</p>
                  <div>
                    <UpdateFavList item={item} />
                  </div>
                </div>

              </div>
            </div>
          </div>)}
      </div>
      <Pagination onAdd={handlePageNo} />
    </div>
  )
}

export default SearchMovieName;