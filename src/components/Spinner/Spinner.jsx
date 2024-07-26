import styles from "./Spinner.module.scss";
import spinner from "../../assets/loadspinner.png"

const Spinner = () => {
  return (
    <div>
      <img src={spinner} alt="" className={styles.loader} />
    </div>
  )
}

export default Spinner