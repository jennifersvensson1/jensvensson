import styles from '../styles/layout.module.css'
import Header from './header';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header />
            {children}
        </div>
    );
}