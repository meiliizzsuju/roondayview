import React from 'react';
import {blogMockData} from '../../mockdata/mockData';
import BlogPreview from './BlogPreview';

const BlogFeed = () => {
    const blogData = blogMockData;

    return (
        <div className='blogfeed'>
            {
              blogData.map((blog,i)=>(
                <BlogPreview blog={blog} key={blog.id+'-'+i}/>
              ))
            }
        </div>
    )
}

export default BlogFeed