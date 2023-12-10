import React from 'react'
import { IMG_URL_CARD } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'>
      <img alt='card poster' src={IMG_URL_CARD + posterPath} />
    </div>
  )
}

export default MovieCard;