import Header from "./Header"
import Footer from "./Footer"
import Toolbar from "./Toolbar"
import { Outlet } from "react-router-dom"
import { useState } from "react"

const Layout = () => {
    // header, toolbar, outlet, footer를 모두 감싸고 있을 컴포넌트
    
    const [checked, setChecked] = useState([]);
    const [reRender, setreRender] = useState(0);
    
    return (
        <div id="layoutDiv">
            <Header />
            <Toolbar checked={checked} setreRender={setreRender} />
            <div id="mainDiv">
                <Outlet context={{checked : checked, setChecked : setChecked}} />
            </div>
            <Footer />
        </div>
    )
}

export default Layout