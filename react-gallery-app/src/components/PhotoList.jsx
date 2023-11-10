import React from "react";
import Photo from "./Photo"

const PhotoList = ({data}) => {
  let photos;
  photos = data.map((photo) => (<Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} key={photo.id} /> ))
  return (
    <ul>
      {photos}
    </ul>
      
  )
}

export default PhotoList