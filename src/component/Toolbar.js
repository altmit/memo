import { useNavigate, useParams } from "react-router-dom";
import styles from "./Toobar.module.css"
const Toolbar = (props) => {
    // Go list, Add, Delete 등 상당 toolbar를 출력하는 컴포넌트
    // useParams를 이용해서 현재 위치가 list인지 memoview인지 확인하여 add 또는 edit버튼으로 변경된다.

    const {id} = useParams();
    const navigate = useNavigate();
    
    const addMemo = () => {
        navigate('/add', { replace : true });
        props.setreRender((x)=>x+1);
    }

    const editMemo = () => {
        navigate(`/edit/${id}`, { replace : true });
        props.setreRender((x)=>x+1);
    }

    const goList = () => {
        navigate('/', { replace : true });
        props.setreRender((x)=>x+1);
    }

    const checkMemoList = () => {
        // 체크된 메모를 배열로 리턴하는 함수

        let checkedMemo = [];
        if(id === undefined) {
            return checkedMemo=props.checked;
        } 
        return checkedMemo.push(id);
    }

    const deleteMemo = () => {
        // checkMemoList에서 리턴된 배열을 삭제하는 함수

        const list = checkMemoList();
        
        if(list.length === 0) {
            // 배열의 길이가 0이면 체크된 배열이 없기 때문에 멈춘다.

            alert("Not checked!");
            return;
        }
        if(window.confirm("really delete?")) {
            list.forEach((e) => {
                window.localStorage.removeItem(e);
            }); 
            props.setreRender((x)=>x+1);
            // layout에 있는 강제 랜더링을 위해 만들어 둔 state이다.
        }
    }


    return (
        <div id={styles.toolbarDiv}>
            <div className={styles.leftDiv}>
                <button className={styles.button} onClick={goList}>Go List</button>
                {
                    id === undefined ? <button className={styles.button} onClick={addMemo}>Add</button> : <button className={styles.button} onClick={editMemo}>Edit</button>
                }
            </div>
            <div className={styles.rightDiv}>
                <button className={styles.button} onClick={deleteMemo}>Delete</button>
            </div>
        </div>
    )
}

export default Toolbar