import './profile.css'
import AvatarImg from './../../images/img/avatar.png' 
const Profile = () => {
    return (<section>
        <div className='container'>
            <div className='profile_content'>
            <div className='profile_title'>
                About me
            </div>
            <div className='profile_media'>
                <div className='profile_avatar'>
                    <img src={AvatarImg} alt='Avatar' style={{padding: "24px"}}></img>
                </div>
                <div className='profile_info'>
                    <span>Nick Richardson</span> - specialist in Frontend <br /> development. 
                    Clear code is my passion. <br /> 
                    Solving issues through negotiations 
                    <div className='profile_button'>
                    <div className="profile_button_text">
                        <a href="#!">Get in touch
                        </a>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    </section>);
}
 
export default Profile;