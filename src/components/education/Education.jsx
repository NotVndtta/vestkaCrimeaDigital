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
                        <img src={musicIcon} alt='Music' width={"60px"} height={"60px"}></img>
                        </div>
                        <div className='education_interests_music_text'>
                            <span>Music</span> <br/>
                           <nobr> Indie rock | Reggae </nobr>
                         </div>
                    </div>
                    <div className='education_interests_art'>
                        <div className='education_interests_art_image'>
                            <img src={artIcon} alt='Art' width={"60px"} height={"60px"}></img>
                        </div>
                        <div className='education_interests_art_text'>
                            <span> Art </span> <br />
                            <nobr>Edvard Munch | Frida Kahlo </nobr>
                        </div>
                    </div>
                    <div className='education_interests_photo'>
                        <div className='education_interests_photo_image'>
                            <img src={photoIcon} alt='Photo1' width={"60px"} height={"60px"}></img>
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
                    <div className="column">
                        2008 - Present
                    </div>
                    <div className="column">
                        <span> <nobr>Middle Frontend developer </nobr></span> <br/>
                        Ozon
                    </div>
                    </div>
                    <div className='education_experience_stepik'>
                    <div className="column">
                        2006 - 2007 
                    </div>
                    <div className="column">
                        <span> <nobr> Frontend development courses </nobr></span><br />
                        Stepik
                    </div>
                    </div>
                    <div className='education_experience_spsu'>
                    <div className="column">
                        2000 - 2005 
                    </div>
                    <div className="column">
                        <span> <nobr>Frontend developer </nobr></span> <br />
                        <nobr>Saint Petersburg State University </nobr>
                    </div>
                    </div>
            </div>
        </div>
    </div>
    </section>);
}
 
export default Education;