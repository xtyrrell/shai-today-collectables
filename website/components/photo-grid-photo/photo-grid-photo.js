import * as styles from "./photo-grid-photo.module.scss"

const PhotoGridPhoto = ({ photo }) => (
  <div className={styles.gridPhoto}>
    <p className={styles.date}>{photo.date}</p>
    <img src={photo.src.large} />
    <p className={styles.tags}>{photo.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}</p>
    {/* <p>Owned by xtyrrell</p> */}
  </div>
)

export default PhotoGridPhoto
