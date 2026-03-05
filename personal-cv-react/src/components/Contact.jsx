import { useState } from "react";
import Card from "./Card";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Thank you ${name}!`);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className="container">
            <Card title="Contact Me">
                <form 
                    onSubmit={handleSubmit} 
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
                >
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        style={{ width: '100%', padding: '8px' }} 
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px' }} 
                    />
                    <textarea 
                        placeholder="Your message" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ width: '100%', minHeight: '80px', padding: '8px' }}
                    />
                    <button type="submit" id="submitBtn" style={{ alignSelf: 'center', width: '80%', padding: '10px' }}>
                        Send Message
                    </button>
                </form>
            </Card>
            <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.9rem', color: '#666' }}>
                <p>&copy; 2026 Jo Lucero. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Contact;