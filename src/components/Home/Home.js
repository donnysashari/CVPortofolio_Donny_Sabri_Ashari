import React, {Component} from 'react';
import './Home.css'
import profil from './profil.png';
import Screenshot1 from './Screenshot (184).png';
import Screenshot2 from './Screenshot (185).png';
import Screenshot3 from './Screenshot (187).png';
import Screenshot4 from './Screenshot (191).png';
import Screenshot5 from './Screenshot (192).png';
import Screenshot6 from './oderpedia.png';

class Home extends Component {
    render() {
        return (
            <main class="l-main">
            {/*-===== HOME =====-->  */}
                <section class="home" id="home">
                    <div class="home__container bd-grid"> 
                    <h1 class="home__title"> HELLO</h1>
                            <div class="home__scroll">
                                <a href="#about" class="home__scroll-link"><i class='bx bx-up-arrow-alt' ></i>Scroll down</a>
                            </div>
                            <img src={profil} alt="profil" class="home__img"/>
                    </div>
            </section>
            
            {/*-===== ABOUT =====-->  */}
            <section class="about section" id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img"> 
                    <img src={profil} alt="profil"></img> 
                    </div>
                        
                <div>
                        <h2 class="about__subtitle">Saya Donny Sabri Ashari</h2>
                        <span class="about__profession">Front-end Developer</span>
                        
                        <p class="about__text">Saya adalah seorang INFP-T(berdasarkan MBTI Personalities). Saya lahir di Viqueque <i class="em em-flag-tl" aria-role="presentation" aria-label="Timor-Leste Flag"></i>, pada 08 Januari 1998. Saya Lulusan S1 Teknik Komputer Telkom University</p>

                        <div class="about__social">
                            <a href="#" class="about__social-icon"><i class='bx bxl-linkedin' ></i></a>
                            <a href="#" class="about__social-icon"><i class='bx bxl-github' ></i></a>
                            <a href="#" class="about__social-icon"><i class='bx bxl-whatsapp' ></i></a> 
                        </div>
                    </div>
                </div>
            </section>

            {/*-===== SKILLS =====-->  */}
            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid"> 
                    <div class="skills__box">
                        <h3 class="skills__subtitle">Development</h3>
                        <span class="skills__name">html</span>
                        <span class="skills__name">Css</span>
                        <span class="skills__name">Javascript</span>
                        <span class="skills__name">C++</span>
                        <span class="skills__name">Python</span>
                        
                        <h3 class="skills__subtitle">Multimedia</h3>
                        <span class="skills__name">Corel Draw</span>
                        <span class="skills__name">Adobe XD</span>
                        <span class="skills__name">Photoshop</span>
                        <span class="skills__name">Premiere</span>
                        <span class="skills__name">After effect</span>
                    </div>
                    <div class="skills__img">  <img src="skill.jpg" alt=""></img>  </div>
                
                </div>

            </section>

            {/*-===== portofolio =====-->  */}
            <section class="portfolio section" id="portfolio">
                <h2 class="section-title">Portfolio</h2>

                <div class="portfolio__container bd-grid"> 
                    <div class="portfolio__img"> 
                    <img src={Screenshot1} alt="Screenshot1"></img>
                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div class="portfolio__img">
                        <img src={Screenshot2} alt="Screenshot2"></img>

                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div class="portfolio__img">
                        <img src={Screenshot3} alt="Screenshot3"></img>

                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div class="portfolio__img">
                        <img src={Screenshot4} alt="Screenshot4"></img>

                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div class="portfolio__img">
                        <img src={Screenshot5} alt="Screenshot5"></img>

                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                    <div class="portfolio__img">
                        <img src={Screenshot6} alt="Screenshot6"></img>

                        <div class="portfolio__link">
                            <a href="#" class="portfolio__link-name">View details</a>
                        </div>
                    </div>
                </div>
            </section>

            {/*-===== Contact =====-->  */}
            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <div class="contact__info">
                        <h3 class="contact__subtitle">EMAIL</h3>
                        <span class="contact__text">donnysashari@gmail.com</span>

                        <h3 class="contact__subtitle">PHONE</h3>
                        <span class="contact__text">+62 85 604 582 321</span>

                        <h3 class="contact__subtitle">ADDRESS</h3>
                        <span class="contact__text">Perum Asabri No. 28, Kota Probolinggo, Jawa Timur</span>
                    </div>
                </div>
            </section>
        </main>
        )
            
        
    }
}
export default Home