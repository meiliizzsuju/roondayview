import React from 'react';
import { Link } from 'react-router-dom';
import './blogpreview.css';

const defaultImg = 'https://picsum.photos/640/360'

const BlogPreview = ({blog}) => {
    const blogdetailpath = '/blog/'+blog._id;
    const title = blog.title;
    const img = blog.img;

    const checkImg = (blogImg) =>{
        if(!blogImg || blogImg === ''){
            return defaultImg
        } else{
            return blogImg
        }
    }

    return (
    <div className='blogpreview'>
        <Link to={blogdetailpath}>
            <div className='blogpreview__container'>
                <img src={checkImg(img)} alt={title} />
                <div className='blogpreview__text'>
                    <p><b>{title}</b></p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BlogPreview