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
                        2008 - Present <span> Middle Frontend developer </span> <br/>
                        Ozon
                    </div>
                    <div className='education_experience_stepik'>
                        2006 - 2007 <span> Frontend development courses </span><br />
                        Stepik
                    </div>
                    <div className='education_experience_spsu'>
                        2000 - 2005 <span>Frontend developer </span> <br />
                        Saint Petersburg State University
                    </div>
            </div>
        </div>
    </div>
    </section>);
}
 
export default Education;