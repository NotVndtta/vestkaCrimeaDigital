import "./banner.css"
import telegramImg from "./../../images/icons/Vector.png"
const Banner = () => {
    return (<section>
        <div className="container">
            <div className="banner_content">
            <div className="banner_text">
                <div className="banner_main_text">
                    Hey, I’m Nick
                </div>
                <div className="banner_text_description">
                    Frontend developer
                </div>
                <div className="banner_text_info">
                    Help you to create high-quality digital 
                    products that your clients will love and let 
                    your business thrive 
                </div>
                <div className="banner_button">
                    <a href="#!">Get in touch
                    </a>
                    <a href="#!"> <img src={telegramImg} alt="tgImg"></img> </a>
                    
                   
                </div>
            </div>
        </div>
        </div>
    </section>);
}
 
export default Banner;