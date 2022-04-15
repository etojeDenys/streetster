import {ReactComponent as Logo} from '../../assets/logo_white.svg'
import './navigation-bar.styles.scss'
import BurgerMenuButton from "../BurgerMenuButton/burger-menu-button";
import CartButton from "../CartButton/cart-button";


const NavigationBar = () => {

    return (
        <div className='navigation-bar'>
            <Logo className='logo'/>
            <div className='navigation-bar__buttons'>
                <CartButton/>
                <BurgerMenuButton/>
            </div>
        </div>
    )
}

export default NavigationBar