import React from 'react'
import background from "../../assets/background.jpg";
const Header = () => {
        return (      
          <header style={style}>
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  {/* <h1 className="fw-light text-dark">Interesting Tag Line</h1> */}
                  {/* <p className="lead">A great starter layout for a landing page</p> */}
                </div>
              </div>
            </div>
          </header>
        );
}

const style = {
  height: "30vh",
  // minHeight: "500px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
export default Header
