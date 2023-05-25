import React, {useState, useContext, useEffect} from 'react';
import DataContext from '../../context/data/dataContext';

const BlogDash = () => {
    const dataContext = useContext(DataContext);
    const { title, blogs, getBlogs } = dataContext
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
        <input onChange={onRangeChange} type="range" className="form-range mb-2"  min={0} max={blogs.length-3} step="1"></input>
            {blogs.length < 1 ? "" : [...Array(3).keys()].map(x =>(
                <div className="row">
                    <div className="card cardbody bg-light p-2">
                    <h1 className="cardtitle text-primary text-left">{blogs.at(x+state).title}</h1>
                    <h3 className="text-secondary">{blogs.at(x+state).date}</h3>
                    <p className="m-2">
                        {blogs.at(x+state).text}
                    </p>
                </div>
                </div>
            ))}
        
        </div>
  );
};

export default BlogDash;
