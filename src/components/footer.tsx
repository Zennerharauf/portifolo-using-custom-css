// Footer.tsx
import "../style/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-logo">ZARQ</h3>
                <p className="footer-description">Thank you for visiting my portfolio!</p>
                <ul className="footer-links">
                    <li><a href="https://www.linkedin.com/in/zennerha-rauf-7a39002b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Zennerharauf" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://vercel.com/zennerha-rauf-s-projects" target="_blank" rel="noopener noreferrer">Vercel</a></li>
                </ul>
            </div>
            <p className="footer-copyright">© 2024 Zennerha Rauf. All rights reserved.</p>
        </footer>
    );
}

export default Footer;