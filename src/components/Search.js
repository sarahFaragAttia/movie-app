import { Link } from "react-router-dom"
import { useState } from "react"



const Search = () => {
    const [inputValue, setInputValue] = useState()

    return (
        <div class="input-group inputSearch mt-4  mb-4 flex-nowrap m-auto">

            <input type="text" className="form-control p-3 m-sm-0 fw-normal" placeholder="Search and explore" onChange={(e) => setInputValue(e.target.value)} value={inputValue} aria-label="Username" aria-describedby="addon-wrapping" />
            <Link to={`/searchMovieName/${inputValue}`}><button class="input-group-text h-100 input rounded-3 fw-normal  search ms-4 me-4 fs-4  rounded  " type="button" id="addon-wrapping">Search</button></Link>

        </div>
    )
}

export default Search;