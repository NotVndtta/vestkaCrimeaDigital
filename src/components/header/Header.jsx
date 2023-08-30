import './header.css'
import logo from './../../images/icons/Logo.svg'

const Header = () => {
    return (<section>
        <div className='container'>
            <div className='header'>
                <div className='header_logo'>
                    <img src={logo} alt="Logo"></img>
                </div>
                <nav className='header_navigation'>
                    <a1 href="#!">Main</a1>
                    <a href="#!">About</a>
                    <a href="#!">Get in touch</a>
                </nav>
            </div>
        </div>
    </section>);
}
 
export default Header;