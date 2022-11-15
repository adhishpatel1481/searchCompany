import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Ads = ({data}) => {
  return (
    <div className='ad'>
        <a href={data.Advertiser[0].url}> <img className='image' src={data.imageUrl} alt="image"/></a>
        <div className='adDetail'>
        <p>{data.Advertiser[0].name}</p>
        <p>{data.primaryText}</p>
        <p>{data.headline}</p>
        </div>
    </div>
  )
}

export default Ads;