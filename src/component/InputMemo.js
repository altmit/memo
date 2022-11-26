import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from './InputMemo.module.css'

const InputMemo = () => {
    // Add와 edit 모두 사용되는 컴포넌트
    // useParams를 통해서 Add와 edit 구분한다.
    // id 값이 있는 경우 edit이다.
    
    const navigate = useNavigate();
    const {id} = useParams();
    const memoData = id === undefined ? "" : JSON.parse(window.localStorage.getItem(id));

    const [title, setTitle] = useState(() => {
        return id === undefined ? "" : memoData.title
    })

    const [content, setContent] = useState(() => {
        return id === undefined ? "" : memoData.content
    })

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeContent = (e) => {
        setContent(e.target.value);
    }
    
    const memoSave = () => {
        //메모를 저장한다.

        if(title === "" || content === "") {
            // title, content 둘중 하나라도 비어있다면 멈춘다.
            
            alert("title or content is NULL");
            return;
        }
        if(id !== undefined) {
            // edit이기 때문에 수정 이전의 값을 지운다.

            localStorage.removeItem(id);
        }
        const key = new Date().toLocaleString();
        const value = JSON.stringify({title : title, content :content});
        window.localStorage.setItem(key, value)
        
        navigate(`/memo/${key}`);
    }

    return (
        <div className={styles.InputMemo}>
            <input className={styles.memoTitle} placeholder="Title" value={title} onChange={changeTitle}></input>
            <textarea className={styles.memoContent} placeholder="Content" value={content} onChange={changeContent}></textarea>
            <button className={styles.saveButton} onClick={memoSave}>Save</button>
        </div>
    )
}

export default InputMemo