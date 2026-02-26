function Contact() {
    return (
        <div className="container">
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <input type="text" id="name" placeholder="Name" style={{ width: '100%' }} />

                <input type="email" id="email" placeholder="Email" style={{ width: '100%' }} />

                <textarea placeholder="Your message" style={{ width: '100%', minHeight: '80px' }}></textarea>

                <button type="submit" id="submitBtn" style={{ alignSelf: 'center', width: '80%' }}>Send</button>
            </form>

            <footer style={{ textAlign: 'center' }}>
                <p>&copy; 2026 Jo Lucero. All rights reserved. </p>
            </footer>
        </div>
    );
}
export default Contact;