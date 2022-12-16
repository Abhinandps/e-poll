import { useNavigate } from "react-router-dom";
import Arrowvector from "../../Assets/Icons/arrowvector.svg";

const SignInAndSignUp = ({path}) => {
  const navigate = useNavigate();
  const goTo = (route) => {
    navigate(
      `/${route}/${path}`
    )
  }

return (

  <>

    <div className="usertypecontent">
          
          <div className="usertypetext">
            <div>
              <h1> Vote For The Future </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
              </p>
            </div>
          </div>

          <div className="buttoncontainer">
          
            <div className="adminvoterbuttons">
              
              <div className="adminbutton">
                <button onClick={()=>goTo("admin")}>Admin
                <img src={Arrowvector} alt="arrowkey" />
                </button>
              </div>  

              <div className="voterbutton">
                <button onClick={()=>goTo("voter")}>Voter
                <img src={Arrowvector} alt="arrowkey" />
                </button>
              </div> 
          
          </div>   
        
        </div>

        </div>

        <div className="usertypebottom">
          <div className="usertypebottomcontent">
            <h2>E-Poll System For College Election </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium nesciunt quibusdam nobis culpa odit sint eaque, iste natus!
            </p>
          </div>  
        </div>

        

  </>
    
)
}
export default SignInAndSignUp