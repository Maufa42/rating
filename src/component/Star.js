import React from 'react'
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'


const Star = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [isHover, setIsHover] = useState(null);

  const getReviewLabel = (rating) => {
    switch (rating) {
      case 1:
        return `Very bad ${String.fromCodePoint("0x1F922")}`;
      case 2:
        return `Bad ${String.fromCodePoint("0x1F97A")}`;
      case 3:
        return `Okay ${String.fromCodePoint("0x1F60C")}`;
      case 4:
        return `Good ${String.fromCodePoint("0x1F60A")}`;
      case 5:
        return `Excellent ${String.fromCodePoint("0x1F929")}`;

      default:
        return "";
    }
  };


  const handleChange = (ratingValue) => {
    setHoverFill(ratingValue)
    setIsHover(ratingValue)
  }
  const handleOver = ()=> {
    setHoverFill(null)
    setIsHover(null)
  }
  
  return (

    <div className='star-wrapper'>
            <h2 className="review-label">
              {getReviewLabel(isHover > 0 ? isHover : rating)}
            </h2>
    <div className='star'>
      {/* <FaStar/> */}


      {[...Array(5)].map((_, index) => {
        const ratingValue = index+1
        return (
          <button
          key = {index}
          onMouseEnter = {()=>handleChange(ratingValue)}
          onMouseLeave = {()=>handleOver()}
          onClick = {()=>setRating(ratingValue)}
          >
            <FaStar
            className='FaStar'
            size = {80}
            style = {{
              color: ratingValue <= (hoverFill || rating) ? "rgb(229 196 27 / 90%)" : "#ccc",
            }}
            onChange = {()=> setRating(ratingValue)}
            value = {ratingValue}
            />
          </button>
        )

      })}
    </div>
    </div>
    )
}

export default Star