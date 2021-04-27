import * as styles from "./shimmer-box.module.scss"

const ShimmerBox = ({ data, hint }) => {
  let placeholder = " ".repeat(hint ? hint.length : 2)
  return <span className={`${!data && styles.loading} ${styles.value}`}>{data || placeholder}</span>
}

export default ShimmerBox
