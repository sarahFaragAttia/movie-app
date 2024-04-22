
import {Link} from "react-router-dom"
import { IoHeart } from "react-icons/io5";
import {useSelector} from "react-redux"

const Navbar=()=>{


const favourite=useSelector((state)=>state.favourite?.value)
    return(
      <nav className="container-fluid">
        <div className=" d-flex flex-row justify-content-between align-items-center  p-4">
        <div>
       <Link to=""><h4 className="fw-bold">Movie App</h4></Link>

        </div>
        <div className="d-flex flex-row align-item-center">
       

   {/* shadow none class to remove outline  */}
<select class="form-select border-0 bg-transparent  shadow-none "  style={{width:"80px"}} aria-label="Default select example">
  <option  value="En" selected >En</option>
  <option value="Arabic">Arabic</option>

</select>
<Link to="/favourite">
<div className="d-flex align-items-center">
<IoHeart size="30px" />

<span className="ms-3 position-relative">Watch List</span>
  
  <span class="position-absolute  translate-middle badge rounded-pill bg-white" style={{top:"20px",left:"98%"}}>
    {favourite?.length}
  
  </span>
</div>
</Link>



        </div>
</div>
        </nav>
    )
}
export default Navbar;