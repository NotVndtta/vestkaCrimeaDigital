import './header.css'
import logo from './../../images/icons/Logo.svg'

const Header = () => {
    return (<section>
        <div className='container'>
            <div className='header'>
                <div className='header_logo'>
                    <img src={logo} alt="Logo"></img>
                </div>
                <div className='header_navigation'>
                    <a href="#!">Main</a>
                    <a href="#!">About</a>
                    <a href="#!">Get in touch</a>
                </div>
            </div>
        </div>
    </section>);
}
 
export default Header;