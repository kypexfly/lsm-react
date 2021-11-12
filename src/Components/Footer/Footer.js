import './Footer.css';
import syoutube from '../../Images/social-youtube.png';
import sfacebook from '../../Images/social-facebook.png'; 
import sdiscord from '../../Images/social-discord.png';
import sinstagram from '../../Images/social-instagram.png';

function Footer() {
    return (
        <footer id="footer">
            <a href="http://youtube.com/quantumlex">La Logia de los Santos Mojados:
                Quantum Lex y Bolita Darroz</a>
            <div id="social">
                <a target="_blank" rel='noreferrer' href="https://www.youtube.com/c/QuantumLex">
                    <img className="hover-animate" src={syoutube} alt="Youtube" />
                </a>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/groups/LaLogiaDeLosSantosMojados/">
                    <img className="hover-animate" src={sfacebook} alt="Facebook" />
                </a>
                <a target="_blank" rel='noreferrer' href="https://discord.com/invite/Z2ZnQR3">
                    <img className="hover-animate" src={sdiscord} alt="Discord" />
                </a>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/quantumybolita/">
                    <img className="hover-animate" src={sinstagram} alt="Instagram" />
                </a>

            </div>
        </footer>
    )
}

export default Footer;