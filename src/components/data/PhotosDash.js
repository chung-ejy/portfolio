import React, {useState} from 'react';
import newyork from '../../assets/travels/new_york.jpg'
import bseaport from '../../assets/travels/boston_seaport.jpg'
import the_hyundai from '../../assets/travels/the_hyundai.jpg'
import boat from '../../assets/travels/boat.jpg'
import island from '../../assets/travels/island.jpg'
import forest from '../../assets/travels/forest.jpg'
import desk from '../../assets/travels/desk.jpg'

const PhotosDash = () => {
  const [state,setState] = useState(0)
  const pics = [bseaport,the_hyundai,boat,island,forest,desk,newyork]
  const onRangeChange = (e) => {
    e.preventDefault()
    setState(Number(e.target.value))
}
  return (
    <div className="card card-body md-10 mb-3 text-center bg-light">
        <h1 className="cardtitle text-center text-primary">Photos</h1>
            {[...Array(7).keys()].map(x =>(
                      <div className="row">
                <div className="col">
                    <img alt="myface" className="img-fluid" style={imageStyle} src={pics.at(x)}></img>
                    <h6 className="mt-3">{pics.at(state+x).split(".")[0].split("/")[3]}</h6>
                </div>
                </div>
            ))}
        
        {/* <input onChange={onRangeChange} type="range" class="form-range"  min="0" max={6} step="1"></input> */}
        </div>
  );
};

const imageStyle = {
  display: "inline",
//   border:"solid 1px #78C2BE",
  border:"solid 1px grey",
  width:"auto",
  height:"300px",
  borderRadius:"10%"
}
export default PhotosDash;
