import React, { useState } from 'react'
import Ads from './Ads';

const Search = () => {
    const [text,setText]=useState("");
    const [advertisements,setAdvertisements]=useState([]);
    const searchHandl=async(e)=>{
        setText(e.target.value);
        if(e.target.value){
        let data=await fetch(`http://localhost:5000/search/${e.target.value}`);
        data=await data.json();
        setAdvertisements(data)
        console.log(data);
        }
        else
        setAdvertisements([]);
    }
  return (<>
    <div className='searchBar'>
        <input placeholder='Search Company' value={text} onChange={searchHandl} />
    </div>
    <div className='adsBody'>
        {advertisements.map(ads=>{
            return <Ads data={ads}/>
        })

        }
    </div>
  </>)
}

export default Search