import { Link } from "react-router-dom"
import ComputerWireframe from "../../Assets/Images/computerwireframe.png"
import MonicaVector from "../../Assets/Images/monica.png"
import MonicaShadow from "../../Assets/Images/monicashadow.png"

const Home = ()=> {
    return (
   
      <>
        <div className="herocontent">
          <div className="maintext">
            <h1> Vote For The Future </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
            </p>
          </div>
          <div className="vector">
            <div className="computerwireframe">
              <img src={ComputerWireframe} alt="computerwireframe" />
            </div>
            <div className="monica">
              <img src={MonicaVector} alt="monicavector" />
              <div className="monicashadow">
                <img src={MonicaShadow} alt="monicashadow" />
              </div>
            </div>
          </div>
        </div>

        
        
        <div className="bottom">
          <div className="bottomcontent">
            <h2>E-Poll System For College Election </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
            </p>
          </div>
          <div className="buttons">
          <Link to="sign-up">
            <button className="signup">
               Sign Up 
            </button>
          </Link>
          <Link to="/sign-in">
            <button className="signin">
               Sign In 
            </button>
          </Link> 
            
          </div>
        </div>
      </>
      )
  }

  export default Home