import {useState} from "react";
import './burger-menu-button.styles.scss'

const BurgerMenuButton = ()=> {
    const [toggle,setToggle] = useState(false)

    return (
        <a href='#' className={`menu-btn ${toggle ? 'active':''}`} onClick={()=>setToggle(!toggle)}>
            <span/>
        </a>
    )
}

export default BurgerMenuButton