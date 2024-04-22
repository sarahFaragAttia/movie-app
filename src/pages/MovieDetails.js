import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"
import UpdateFavList from "../components/UpdateFavList"
import { useSelector} from "react-redux"
import Ranking from "../components/Ranking";


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState()
  const [recommendation, setRecommendation] = useState()
  const params = useParams()

  const favourite = useSelector((state) => state.favourite.value)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=8abb3a146fcce22c35ce89e53a42f5d1`)
      .then(data => {

        if (favourite.some((item) => item.id === data.data.id)) {
          setMovieDetails({ ...data.data, fav: true })
        } else { setMovieDetails({ ...data.data, fav: false }) }


      })
      .catch(error => console.log("fetch error", error))
  }, [params, favourite])


  console.log(movieDetails)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieDetails?.id}/recommendations?api_key=8abb3a146fcce22c35ce89e53a42f5d1`)
      .then(data => { return setRecommendation(data.data.results), console.log("rec", data.data.results) })
      .catch(error => { console.log('fetcherror', error) })
  }, [movieDetails])

  return (
    <div className="container-fluid ">

      <div className="m-4 detailSection d-flex flex-row justify-content-between">
        <div className="imageDetails "  >
          <img style={{ borderRadius: "20px" }} src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} />
        </div>


        <div className=" movieDetails ">
          <div className="d-flex  flex-row justify-content-between">
            <h1 className="titleDetails">{movieDetails?.title}</h1>

            <div>
              <UpdateFavList className="heartIcon" size="40px" item={movieDetails} />
            </div>
          </div>


          <p>{movieDetails?.release_date}</p>
          <Ranking className="mt-4 mb-4 mb-sm-2 mt-sm-2 ranking mb-md-1 mt-md-1" size="30px" item={movieDetails} />
          <span className="m-4" style={{ fontSize: "18px" }} >{movieDetails?.vote_count}</span>

          <article className="mt-3 mb-3">{movieDetails?.overview}</article>
          <ul className="genres ">
            {movieDetails?.genres.map((item, index) =>
              <li className="genres rounded-pill p-2 p-sm-1 mb-1 m-xl-3 mt-3 me-2" style={{ width: "150px" }} key={index}>{item.name}</li>)}
          </ul>

          <div className="w-100">
            <h3 className="mb-3 mt-3 fw-bold fs-5 d-inline-block  language ">Languages:</h3>

            {movieDetails?.spoken_languages?.map((item, index) => { return <span style={{ fontSize: "14px" }} className="ms-3 ms-sm-2" key={index}>{item.name}</span> })}
          </div>
          <div>
            {movieDetails?.production_companies?.map((item, index) =>
              <img key={index} className="mt-3 mb-3 companies me-2 me-md-1" src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`} />)}
          </div>
          <div>
            <a href={movieDetails?.homepage} className="badge rounded-pill border border-1  border-warning-subtle p-2 fs-6" style={{ width: "150px" }}>website</a>
          </div>

        </div>

      </div>
      <hr className="m-3" />
      <div className="m-3">
        <h1 className="recommendation mt-4 mb-4 ">Recommendations</h1>
        <div className="row ">
          {recommendation?.map((item, index) =>
            <Link className="text-decoration-none col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 mt-4  " to={`/movieDetails/${item.id}`}>
              <div className="card details border-0  " key={index} >
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} class="card-img-top" />
                <div class="card-body">
                  <h4 style={{ fontSize: "20px" }}>{item.title}</h4>
                  <span class="card-text">{new Date(item.release_date).toLocaleString('default', { month: "long", day: "numeric", year: "numeric" })}</span>
                </div>
              </div>
            </Link>)}
        </div>
      </div>
    </div>
  )

}


export default MovieDetails;