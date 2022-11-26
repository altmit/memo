import { useParams } from "react-router-dom";

const Footer = () => {
    // list에서는 메모의 개수, memoview에서는 메모의 생성 날짜를 출력하는 컴포넌트

    const {id} = useParams();
    const dataLength = window.localStorage.length;
    
    return (
        <div id="footerDiv">
            { id === undefined ? dataLength + "개의 메모" : id}
        </div>
    )
}

export default Footer;