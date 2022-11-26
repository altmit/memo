import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Memo from "./Memo"
import styles from "./MemoList.module.css"

const MemoList = () => {
    // 메모의 list를 표현할 컴포넌트

    const context = useOutletContext();
    useEffect(() => {
        // list를 벗어날때 마다 checked state를 초기화 해준다.

        return () => {
          context.setChecked([]);
        };
      },[]);

    const storageGet = () => {
        // localstorage에서 저장된 메모를 얻어오는 함수
        // 메모를 얻어와 날짜순 정렬하여 오브젝트를 담고 있는 배열을 리턴한다.

        const dataLength = window.localStorage.length;
        let storageArr = [];

        for(let i=0; i<dataLength; i++) {
            const time = window.localStorage.key(i);
            const item = JSON.parse(window.localStorage.getItem(time));
            storageArr.push({time : time, item : item});
        }

        storageArr = storageArr.sort((a,b) => {
            if(a.time < b.time) return 1;
            if(a.time > b.time) return -1;
            return 0;
        })

        return storageArr;
    }

    const listSet = () => {
        // list를 세팅한다.
        // storageGet에서 받은 배열로 memo컴포넌트를 만들어 리턴한다.

        const storageArr = storageGet();
        let list = [];
        
        storageArr.forEach((data) => {
            list.push(
                <div key={data.time} className={styles.list}>
                    <input type="checkbox" className={styles.checkbox} value={data.time} onClick={check}></input>
                    <Memo key={data.time} time={data.time} item={data.item} />
                </div>
            );
        })
        return list;
    }

    const check = (e) => {
        // list에 있는 메모를 체크할 때마다 호출되는 함수
        // 호출시 마다 checked state값에 추가, 변경한다.

        const checked = context.checked; 
        const setChecked = context.setChecked;
        const value = e.target.value

        if(checked.includes(value)){
            // checked state에 이미 있는 값인 경우 
            // 체크가 되어 있을 경우이기 때문에 체크를 해제시키며 해당 값을 지운다

            const index = checked.indexOf(value);
            checked.splice(index,1);
            setChecked(checked);
        } else {
            // 해당 값을 checked state에 추가한다.

            setChecked([...checked,value])
        }
    }
    
    return (
        <div className={styles.listDiv}>
            {listSet()}
        </div>
    )
}

export default MemoList