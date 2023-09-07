import './education.css'
import musicIcon from './../../images/icons/music_icon.svg'
import artIcon from './../../images/icons/art_icon.svg'
import photoIcon from './../../images/icons/photo_icon.svg'

const Education = () => {
    return (<section>
        <div className='container'>
            <div className='education_content'>
                <div className='education_interests'>
                <div className='education_interests_title'>
                            Interests
                        </div>
                    <div className='education_interests_music'>
                        <div className='education_interests_music_image'>
                        <img src={musicIcon} alt='Music'></img>
                        </div>
                        <div className='education_interests_music_text'>
                            <span>Music</span> <br/>
                            Indie rock | Reggae
                        </div>
                    </div>
                    <div className='education_interests_art'>
                        <div className='education_interests_art_image'>
                            <img src={artIcon} alt='Art'></img>
                        </div>
                        <div className='education_interests_art_text'>
                            <span> Art </span> <br />
                            Edvard Munch | Frida Kahlo
                        </div>
                    </div>
                    <div className='education_interests_photo'>
                        <div className='education_interests_photo_image'>
                            <img src={photoIcon} alt='Photo1'></img>
                        </div>
                        <div className='education_interests_photo_text'>
                            <span>Photography</span> <br/>
                            Portraits
                        </div>
                    </div>
                </div>
                <div className='education_experience'>
                    <div className='education_experience_title'>
                        Education & Experience
                    </div>
                    
                    <div className='education_experience_ozon'>

                    </div>
                    <div className='education_experience_stepik'>

                    </div>
                    <div className='education_experience_spsu'>

                    </div>
            </div>
        </div>
    </div>
    </section>);
}
 
export default Education;