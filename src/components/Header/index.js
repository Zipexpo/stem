import styles from "./index.module.css"
import { Link } from "react-router-dom";
export default function () {
    return <div className={styles.header_div}>
        <Link to={`/`}><p className={styles.header_title}>STEM collection</p></Link>
    </div>
}