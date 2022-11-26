import { useParams } from "react-router-dom"
import styles from "./MemoView.module.css"

const MemoView = () => {
    // 메모의 값을 볼 수 있는 컴포넌트
    // useParams를 이용해 해당 하는 값의 메모를 localstorage에서 가져와 출력한다.
    
    const {id} = useParams();
    const data = JSON.parse(window.localStorage.getItem(id));
    return (
        <div className={styles.viewDiv}>
            <div className={styles.title}>
                {data.title}
            </div>
            <div className={styles.content}>
                {data.content}
            </div>
        </div>
    )
}

export default MemoView