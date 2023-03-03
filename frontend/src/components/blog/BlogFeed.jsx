import React from 'react';
import { useEffect } from 'react';
import BlogPreview from './BlogPreview';
import axios from "axios";
import { useState } from 'react';

const BlogFeed = () => {
    const [ blogs , setBlogs] = useState(null);

    useEffect(()=>{
      axios.get('http://localhost:5000/foodblogs').then((response) => {
        setBlogs(response.data);
      });
    },[])

    return (
        <div className='blogfeed'>
            {
              blogs?.map((blog,i)=>(
                <BlogPreview blog={blog} key={i}/>
              ))
            }
        </div>
    )
}

export default BlogFeed