import PhotoGridPhoto from "../photo-grid-photo/photo-grid-photo"
import * as styles from "./photo-grid.module.scss"

const PhotoGrid = ({ photos }) => (
  <div className={styles.photoGrid}>
    {photos.map(photo => (
      <PhotoGridPhoto key={photo.id} photo={photo} />
    ))}
  </div>
)

export default PhotoGrid
