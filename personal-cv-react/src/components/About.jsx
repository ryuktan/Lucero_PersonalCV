import profileImage from '../assets/profile.jpg';

function About() {
    return (
        <div className="container">
            <section className="card">
                <h2>About Me</h2>
                <div style={{ textAlign: 'center' }}>
                    <img src={profileImage} alt="Profile photo" width="250" style={{ borderRadius: '50%' }} />
                </div>
                <p>
                    Email:
                    <a href="mailto:luceroiinathaniel@gmail.com">
                            luceroiinathaniel@gmail.com
                    </a>
                </p>
                <p>
                    GitHub:
                    <a href="https://github.com/ryuktan" target="_blank" rel="noreferrer">
                        github.com/ryuktan
                    </a>
                </p>
                <p>
                    Hello! I am Jo Nathaniel C. Lucero, a 2nd Year IT student learning to code for my future. I am a scholar and student at University of Science and Technology of Southern Philippines (USTP) hoping to<br />
                    gain more knowledge about the future I am creating.
                </p>
            </section>
        </div>
    );
}
export default About;