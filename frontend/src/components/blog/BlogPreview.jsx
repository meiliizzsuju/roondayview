import React from 'react';
import './blogpreview.css';

const defaultImg = 'https://picsum.photos/640/360'

const BlogPreview = ({blog}) => {
    const blogdetailpath = '/blog/'+blog.id;

    const checkImg = (blogImg) =>{
        if(!blogImg || blogImg === ''){
            return defaultImg
        } else{
            return blogImg
        }
    }

    return (
    <div className='blogpreview'>
        <a href={blogdetailpath}>
            <div className='blogpreview__container'>
                <img src={checkImg(blog.img)} alt={blog.name} />
                <div className='blogpreview__text'>
                    <p><b>{blog.name}</b></p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default BlogPreview