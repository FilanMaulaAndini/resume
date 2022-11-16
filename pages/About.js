import Link from 'next/link'
import Head from 'next/head'

const About = () => {
    return(
    <>
        <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Filan {' '}
                        <span class="text-primary">Maula {' '}</span>
                        Andini
                    </h1>
                    <div class="subheading mb-5">
                        Pasuruan · Indonesia, 67165 · +62822-3180-1321 ·{' '}
                        <a href="mailto:name@email.com">filanmaula10@email.com</a>
                    </div>
                    <p class="lead mb-5">Recent college with a degree in Informatics Engineering from Brawijaya University experienced in developing software concering on website. I'm an enthusiastic on Frontend Engineer seeking an entry-level position with Company to use my skills in coding, and assisting in the timely completion of projects. I have highly commited, fast learner, like work challenges, had problem solving skill, able to think logically and critically. </p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/filanmaulaandini/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/FilanMaulaAndini"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon" href="https://id-id.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
        </>
    )
}

export default About