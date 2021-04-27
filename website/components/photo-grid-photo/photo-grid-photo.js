import * as styles from "./photo-grid-photo.module.scss"

const PhotoGridPhoto = ({ photo }) => (
  <div className={styles.gridPhoto}>
    <img src={photo.src.large} />
    <p>{photo.date}</p>
    <p>Owned by xtyrrell</p>
  </div>
)

export default PhotoGridPhoto
