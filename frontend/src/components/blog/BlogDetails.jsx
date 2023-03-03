import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import './blogdetails.css'
import { useEffect, useState } from "react";

const defaultImg = 'https://picsum.photos/640/360'

export const BlogDetails = () => {
  const { blogId } = useParams();
  const [ blog , setBlog] = useState(null);

  const img = blog?.img;
  const title = blog?.title;
  const price = blog?.price;
  const type = blog?.cuisine;
  const description = blog?.description;
  const restaurantName = blog?.restaurant;

  const checkImg = (blogImg) =>{
      if(!blogImg || blogImg === ''){
          return defaultImg
      } else{
          return blogImg
      }
  }


  useEffect(()=>{
    axios.get(`/foodblogs/${blogId}`).then((response) => {
      setBlog(response.data);
    });
  })


  return (
    <div className="blogdetail_page">
        <div className="blogdetail_page__banner">
          <img src={checkImg(img)} alt={title} />
          <div className="blogdetail_page__banner--title">
            <h1>{title}</h1>
          </div>
        </div>
        <Container>
          <div className="blogdetail_page__content">
            {restaurantName && (
              <div className="blogdetail_page__content--restaurant">
                <p>Restaurant : {restaurantName}</p>
              </div>
            )}
            {price && (
              <div className="blogdetail_page__content--price">
                <p>Price : {price}</p>
              </div>
            )}
            {description && (
              <div className="blogdetail_page__content--desc">
                <p>{description}</p>
              </div>
            )}
            {type && (
              <div className="blogdetail_page__content--type">
                <p>Cousine : {type}</p>
              </div>
            )}
          </div>
        </Container>
    </div>
  )
}
 