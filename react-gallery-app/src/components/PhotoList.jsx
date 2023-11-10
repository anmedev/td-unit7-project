import Photo from "./Photo"
import PhotoNotFound from "./PhotoNotFound";

const PhotoList = ({data}) => {
  let photos;
  if (data.length > 0) {
    photos = data.map((photo) => (<Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} key={photo.id} /> ))
  } else {
    photos = <PhotoNotFound />
  }
 
  return (
    <ul>
      <h2>Results</h2>
      {photos}
    </ul>
      
  )
}

export default PhotoList