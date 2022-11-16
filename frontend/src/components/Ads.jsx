import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Ads = ({ data }) => {
  const lis = data.imageUrl.split("/");
  return (
    <div className="ad">
      <a href={data.Advertiser[0].url}>
        <img
          className="image"
          src={`http://drive.google.com/uc?export=view&id=${lis[5]}`}
          alt="image"
        />
      </a>
      <div className="adDetail">
        <p>{data.Advertiser[0].name}</p>
      </div>
    </div>
  );
};

export default Ads;
