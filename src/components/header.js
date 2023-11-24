import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.nav}>
            <a href="#home">Landing</a>
            <a href="#about">About me</a>
            <a href="#tools">Tools</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );   
}