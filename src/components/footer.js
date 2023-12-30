import { SiMaildotru } from 'react-icons/si';
import styles from '../styles/Home.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <p>Get in touch with me!</p>

            <div className={styles.footerLinks}>
                <a href="mailto:jennifer.svenssn@gmail.com"><SiMaildotru className={styles.footerIcon}></SiMaildotru></a>
                <a href="https://www.linkedin.com/in/jennifer-svensson-36172717b/"><FaLinkedin className={styles.footerIcon} /></a>
                <a href="https://github.com/jennifersvensson1"><FaGithub className={styles.footerIcon} /></a>
            </div>
        </footer>
    );   
}