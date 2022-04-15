import backgroundImage from '../../assets/Homepage_background.png'
import './homepage.styles.scss'
import CustomButton from "../../components/CustomButton/custom-button";
import NavigationBar from "../../components/NavigationBar/navigation-bar";

const Homepage = () => {
    return (
        <div>
            <header className='homepage-header' style={{backgroundImage: `url(${backgroundImage})`}}>
                <NavigationBar/>
                <div className="header-content">
                    <span className="header-content__subtitle">STREETSTER NATHAN</span>
                    <h2 className="header-content__title">Fast and comfortable<br/>
                        Your best choice for city rides
                    </h2>
                    <CustomButton>MORE INFO</CustomButton>
                </div>
            </header>
        </div>

    )
}

export default Homepage