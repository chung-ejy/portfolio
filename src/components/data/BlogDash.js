import React, {useState, useContext, useEffect} from 'react';
import DataContext from '../../context/data/dataContext';

const BlogDash = () => {
    const dataContext = useContext(DataContext);
    const { title, blogs, getBlogs,loading } = dataContext
    const [state,setState] = useState(0)
    useEffect(() => {
        getBlogs()
      }, [title]);

    const onRangeChange = (e) => {
    e.preventDefault()
    setState(Number(e.target.value))
}
  return (
    <div className="card card-body md-10 mb-3 bg-light">
        <h1 className="cardtitle text-center text-primary">Blog</h1>
            {blogs.map(x =>(
                <div className="row">
                    <div className="card cardbody bg-light p-2">
                    <h1 className="cardtitle text-primary text-left">{x.title}</h1>
                    <h3 className="text-secondary">{x.date}</h3>
                    <p className="m-2">
                        {x.text}
                    </p>
                </div>
                </div>
            ))}
        <input onChange={onRangeChange} type="range" class="form-range"  min="0" max={6} step="1"></input>
        </div>
  );
};

const imageStyle = {
  display: "inline",
//   border:"solid 1px #78C2BE",
  border:"solid 1px grey",
  width:"auto",
  height:"200px",
  borderRadius:"10%"
}
export default BlogDash;
