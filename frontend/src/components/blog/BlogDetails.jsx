import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import {blogMockData} from '../../mockdata/mockData'; // replace with real data
import {restaurantMockData} from '../../mockdata/mockData'; // replace with real data

import './blogdetails.css'

const defaultImg = 'https://picsum.photos/640/360'

export const BlogDetails = () => {
  const { blogId } = useParams();

  const blogsData = blogMockData;
  const blogDetail = blogsData.filter((blog)=>(blog.id === blogId))[0];
  const restaurantName = restaurantMockData.filter((rtr)=>(rtr.id === blogDetail.restaurant_id))[0].name;

  const checkImg = (blogImg) =>{
      if(!blogImg || blogImg === ''){
          return defaultImg
      } else{
          return blogImg
      }
  }


  return (
    <div className="blogdetail_page">
        <div className="blogdetail_page__banner">
          <img src={checkImg(blogDetail.img)} alt={blogDetail.name} />
          <div className="blogdetail_page__banner--title">
            <h1>{blogDetail.name}</h1>
          </div>
        </div>
        <Container>
          <div className="blogdetail_page__content">
            {restaurantName && (
              <div className="blogdetail_page__content--restaurant">
                <p>Restaurant : {restaurantName}</p>
              </div>
            )}
            {blogDetail.price && (
              <div className="blogdetail_page__content--price">
                <p>Price : {blogDetail.price}</p>
              </div>
            )}
            {blogDetail.desc && (
              <div className="blogdetail_page__content--desc">
                <p>{blogDetail.desc}</p>
              </div>
            )}
            {blogDetail.type && (
              <div className="blogdetail_page__content--type">
                <p>Cousine : {blogDetail.type}</p>
              </div>
            )}
          </div>
        </Container>
    </div>
  )
}
 