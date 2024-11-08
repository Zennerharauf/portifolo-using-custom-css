// Contact.tsx
import "../style/contact.css";

function Contact() {
    return (
        <div id="contact" className="contact-container">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-description">
                I m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>
            <form className="contact-form">
                <input type="text" placeholder="Name" className="contact-input" required />
                <input type="email" placeholder="Email" className="contact-input" required />
                <textarea placeholder="Message" className="contact-textarea" required></textarea>
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;