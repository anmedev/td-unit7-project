import Photo from "./Photo"
import PhotoNotFound from "./PhotoNotFound";

const PhotoList = ({data, title}) => {
  let photos;
  console.log(data)
  if (data.length > 0) {
    photos = data.map((photo) => (<Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} key={photo.id} /> ))
  } else {
    photos = <PhotoNotFound />
  }
 
  return (
    <div className="photo-container">
      <h2>{title}</h2>
      <ul>{photos}</ul>
    </div>
  );

}

export default PhotoList