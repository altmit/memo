import { NavLink } from "react-router-dom";
import styles from "./Memo.module.css"

const Memo = (props) => {
    // memoList에 하나하나 추가될 컴포넌트

    return (
        <NavLink to={`/memo/${props.time}`} className={styles.memoLink}>
            <span className={styles.titleSpan}>{props.item.title}</span>
            <span className={styles.timeSpan}>{props.time}</span>
        </NavLink>
    )
}

export default Memo