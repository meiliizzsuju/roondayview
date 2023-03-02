import React from 'react';
import {trendMockData} from '../../mockdata/mockData.js'; // to be removed once connact to BE

import './trends.css'

const Trends = () => {

  // get trend from backend to be implemented
  const trendData = trendMockData;

  return (
    <div className='trends'>
      <div className='trends__box'>
        <h2>Trends</h2>
        <div className='trends__container'>
          {trendData?.length ? (
            trendData.map((item,i) => (
              <span key={item+i}><a href={'/blog/'+item.slug} className='trends__item' key={item.name+i}>{item.name}</a></span>
            ))
          ) : 'Trending not found'}
        </div>
      </div>
    </div>
  )
}

export default Trends